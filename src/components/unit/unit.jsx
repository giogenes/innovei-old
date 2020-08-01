import React, { Component } from "react";
import { getUnit } from "../../services/unitService";
import UnitHeader from "./unitHeader";
import UnitTabs from "./unitTabs";
import UnitTabsContent from "./unitTabsContent";
import UnitTimeline from "./timeline/unitTimeline";
import * as UnitLocationService from "../../services/unitLocationService";
import * as PartService from "../../services/partService";
import Joi from "@hapi/joi";

class Unit extends Component {
  state = {
    unit: {
      type: {
        name: "",
        pn: "",
        manufacturer: {},
      },
      serialNumber: "",
      ticket: {
        id: "",
        owner: {
          name: "",
          email: "",
          phone: "",
          address: "",
          address2: "",
          city: "",
          state: "",
          zipCode: "",
          country: "",
        },
        location: {
          name: "",
          super: {
            name: "",
            super: {},
          },
          next: [],
        },
      },
      pallet: {
        id: "",
        desc: "",
        bay: null,
      },
      parts: [],
      tests: [],
      timeline: [],
    },

    timelineInputValue: "",
    locationSelectValue: "",
    repairDiscriptionValue: "",
    repairTimeValue: "",
    availableParts: [],
    currentTabKey: "ticket",
    partsModified: false,
    errors: {},
  };

  tabs = [
    { key: "ticket", name: "Ticket" },
    { key: "location", name: "Location" },
    { key: "parts", name: "Parts" },
  ];

  schema = Joi.object({
    timelineInputValue: Joi.string().min(5).max(140).label("Timeline Form"),
    locationSelectValue: Joi.string().min(1).label("Location"),
    repairDiscriptionValue: Joi.string()
      .min(5)
      .max(140)
      .label("Repair Description"),
    repairTimeValue: Joi.string()
      .regex(new RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"))
      .error(new Error("Repair Time must be in the format 00:00")),
  });

  validate(key, value) {
    const errors = this.state.errors;
    const validation = { [key]: value };
    const { error } = this.schema.validate(validation);
    if (!error) {
      errors[key] = "";
      this.setState({ errors });
      return errors[key];
    }
    console.log(error);
    errors[key] = error.message;
    this.setState({ errors });

    return errors[key];
  }

  componentDidMount() {
    const { match, history } = this.props;
    const unit = getUnit(match.params.id);
    if (!unit) history.replace("/not-found");
    this.setState({ unit });
    this.setState({
      availableParts: PartService.getPartsByUnitTypeId(unit.type._id),
    });
  }

  handleTabChange = (key) => {
    this.setState({ currentTabKey: key });
  };

  handleRepairDiscriptionChange = (event) => {
    const value = event.target.value;
    this.validate("repairDiscriptionValue", this.state.repairDiscriptionValue);
    this.setState({ repairDiscriptionValue: value });
  };

  handleRepairTimeChange = (event) => {
    const value = event.target.value;
    this.validate("repairTimeValue", value);
    this.setState({ repairTimeValue: value });
  };

  handleTimelineChange = (event) => {
    const value = event.target.value;
    this.validate("timelineInputValue", value);
    this.setState({ timelineInputValue: value });
  };

  handleLocationSelectChange = (event) => {
    const value = event.target.value;
    this.validate("locationSelectValue", value);
    this.setState({ locationSelectValue: value });
  };

  handleLocationChange = (event) => {
    event.preventDefault();
    const errors = this.validate(
      "locationSelectValue",
      this.state.locationSelectValue
    );
    if (errors) return;
    if (
      this.state.unit.ticket.location.name === "Under Repair" &&
      !this.state.partsModified
    ) {
      const e = this.state.errors;
      e.locationSelectValue =
        "Please either add a non standard repair or add/remove a part to continue";
      this.setState({ errors: e });
      return;
    }
    const unit = { ...this.state.unit };
    unit.ticket.location = UnitLocationService.getUnitLocation(
      this.state.locationSelectValue
    );
    unit.timeline = [
      {
        type: "movement",
        date: new Date(),
        location: unit.ticket.location,
      },
      ...unit.timeline,
    ];

    if (this.state.unit.ticket.location.name === "Under Repair")
      this.setState({ partsModified: false });

    this.setState({ unit, locationSelectValue: "" });
  };

  handleTimelineSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate(
      "timelineInputValue",
      this.state.timelineInputValue
    );
    if (errors) return;
    const unit = { ...this.state.unit };

    unit.timeline = [
      {
        type: "note",
        date: new Date(),
        location: unit.ticket.location,
        content: {
          author: "Giovanni Leon",
          note: this.state.timelineInputValue,
        },
      },
      ...unit.timeline,
    ];

    this.setState({ unit, timelineInputValue: "" });
  };

  handleRemovePart = (partId, e) => {
    const consumedPartIndex = this.state.unit.parts.findIndex(
      (p) => p._id === partId
    );

    const moreThanOneConsumedPart =
      this.state.unit.parts[consumedPartIndex].amount > 1;

    let newUnit = {};

    if (moreThanOneConsumedPart) {
      newUnit = {
        ...this.state.unit,
        parts: this.state.unit.parts.map((p) => {
          if (p._id === partId) {
            return { ...p, amount: p.amount - 1 };
          }
          return p;
        }),
      };
    } else {
      newUnit = {
        ...this.state.unit,
        parts: [
          ...this.state.unit.parts.slice(0, consumedPartIndex),
          ...this.state.unit.parts.slice(consumedPartIndex + 1),
        ],
      };
    }
    let newAvailableParts = this.state.availableParts.map((p) => {
      if (p._id === partId) {
        return { ...p, amount: p.amount + 1 };
      }
      return p;
    });

    newUnit = {
      ...newUnit,
      timeline: [
        {
          type: "part",
          date: new Date(),
          location: newUnit.ticket.location,
          content: {
            partName: this.state.unit.parts[consumedPartIndex].name,
            action: "Removed",
          },
        },
        ...newUnit.timeline,
      ],
    };
    const partsModified = true;
    this.setState({
      unit: newUnit,
      availableParts: newAvailableParts,
      partsModified,
    });
  };

  handleAddPart = (partId, e) => {
    const availablePartIndex = this.state.availableParts.findIndex(
      (p) => p._id === partId
    );

    if (this.state.availableParts[availablePartIndex].amount < 1) return;
    const consumedPartExists =
      this.state.unit.parts.filter((part) => part._id === partId).length > 0;
    let newUnit = {};
    if (consumedPartExists) {
      newUnit = {
        ...this.state.unit,
        parts: this.state.unit.parts.map((part) => {
          if (part._id === partId) {
            return { ...part, amount: part.amount + 1 };
          }
          return part;
        }),
      };
    } else {
      newUnit = {
        ...this.state.unit,
        parts: [
          ...this.state.unit.parts,
          { ...this.state.availableParts[availablePartIndex], amount: 1 },
        ],
      };
    }
    const newAvailableParts = this.state.availableParts.map((part) => {
      if (part._id === partId) {
        return { ...part, amount: part.amount - 1 };
      }
      return part;
    });

    newUnit = {
      ...newUnit,
      timeline: [
        {
          type: "part",
          date: new Date(),
          location: newUnit.ticket.location,
          content: {
            partName: this.state.availableParts[availablePartIndex].name,
            action: "Added",
          },
        },
        ...newUnit.timeline,
      ],
    };

    const partsModified = true;
    this.setState({
      unit: newUnit,
      availableParts: newAvailableParts,
      partsModified,
    });
  };

  render() {
    const { unit, availableParts, currentTabKey } = this.state;
    return (
      <div className="container-fluid">
        <UnitHeader unit={unit} />
        <UnitTabs
          defaultActiveKey="ticket"
          currentTabKey={currentTabKey}
          unitId={this.props.match.params.id}
          onTabChange={this.handleTabChange}
          tabs={this.tabs}
        />
        <div className="row">
          <div className="col-md-9">
            <UnitTabsContent
              currentTabKey={this.currentTabKey}
              onLocationChange={this.handleLocationChange}
              onLocationSelectChange={this.handleLocationSelectChange}
              onRemovePart={this.handleRemovePart}
              onAddPart={this.handleAddPart}
              locationSelectValue={this.state.locationSelect}
              id={this.props.match.params.id}
              unit={unit}
              availableParts={availableParts}
              errors={this.state.errors}
              repairDiscriptionValue={this.state.repairDiscriptionValue}
              onRepairDiscriptionChange={this.handleRepairDiscriptionChange}
              repairTimeValue={this.state.repairTimeValue}
              onRepairTimeChange={this.handleRepairTimeChange}
            />
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="border-left timeline-style">
          <UnitTimeline
            timelineInputValue={this.state.timelineInputValue}
            onChange={this.handleTimelineChange}
            onSubmit={this.handleTimelineSubmit}
            unit={this.state.unit}
            errors={this.state.errors}
          />
        </div>
      </div>
    );
  }
}

export default Unit;
