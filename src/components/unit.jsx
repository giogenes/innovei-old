import React, { Component } from "react";
import { getUnit } from "../services/unitService";
import UnitHeader from "./unitHeader";
import UnitTabs from "./unitTabs";
import UnitTabsContent from "./unitTabsContent";
import UnitTimeline from "./unitTimeline";

class Unit extends Component {
  state = {
    unit: {
      type: {
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
            super: {
              name: "",
            },
          },
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
    selectedKey: "ticket",
    timelineInputValue: "",
  };

  tabs = [
    { key: "ticket", name: "Ticket" },
    { key: "actions", name: "Actions" },
    { key: "parts", name: "Parts" },
  ];

  componentDidMount() {
    const { match, history } = this.props;
    const unit = getUnit(match.params.id);
    if (!unit) history.replace("/not-found");
    this.setState({ unit });
  }

  handleTabChange = (selectedKey) => {
    this.setState({ selectedKey });
  };

  handleTimelineChange = (event) => {
    this.setState({ timelineInputValue: event.target.value });
  };

  handleTimelineSubmit = (event) => {
    event.preventDefault();
    let unit = { ...this.state.unit };
    let timelineItem = {};

    timelineItem.author = "Giovanni Leon";
    timelineItem.type = "note";
    timelineItem.date = new Date();
    timelineItem.location = this.state.unit.ticket.location;
    timelineItem.content = this.state.timelineInputValue;

    unit.timeline.unshift(timelineItem);
    this.setState({ unit, timelineInputValue: "" });
  };

  render() {
    const { unit, selectedKey } = this.state;
    return (
      <div className="container-fluid">
        <UnitHeader unit={unit} />
        <UnitTabs
          defaultActiveKey="ticket"
          onSelect={this.handleTabChange}
          tabs={this.tabs}
        />
        <div className="row">
          <div className="col-md-9">
            <UnitTabsContent selectedKey={selectedKey} unit={unit} />
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
