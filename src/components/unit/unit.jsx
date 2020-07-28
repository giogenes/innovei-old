import React, { Component } from "react";
import { getUnit } from "../../services/unitService";
import UnitHeader from "./unitHeader";
import UnitTabs from "./unitTabs";
import UnitTabsContent from "./unitTabsContent";
import UnitTimeline from "./timeline/unitTimeline";
import * as UnitLocationService from "../../services/unitLocationService";
import * as PartService from "../../services/partService";

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
      timeline: [],
    },

    currentTabKey: "ticket",
    timelineInputValue: "",
    locationSelectValue: "",
    availableParts: [],
  };

  tabs = [
    { key: "ticket", name: "Ticket" },
    { key: "location", name: "Location" },
    { key: "parts", name: "Parts" },
  ];

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

  handleTimelineChange = (event) => {
    this.setState({ timelineInputValue: event.target.value });
  };

  handleLocationChange = (event) => {
    event.preventDefault();
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
    this.setState({ unit });
  };

  handleLocationSelectChange = (event) => {
    this.setState({ locationSelectValue: event.target.value });
  };

  handleTimelineSubmit = (event) => {
    event.preventDefault();
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

    this.setState({ unit: newUnit, availableParts: newAvailableParts });
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

    this.setState({ unit: newUnit, availableParts: newAvailableParts });
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
          />
        </div>
      </div>
    );
  }
}

export default Unit;
