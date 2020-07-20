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
      owner: {},
      location: {},
      parts: [],
      notes: [],
    },
    selectedKey: "about",
    timelineInputValue: "",
  };

  tabs = [
    { key: "about", name: "About" },
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
    let note = {};

    note.author = "Giovanni Leon";
    note.date = new Date();
    note.location = this.state.unit.location;
    note.content = this.state.timelineInputValue;

    unit.notes.unshift(note);
    this.setState({ unit, timelineInputValue: "" });
  };

  timelineStyle = {
    position: "absolute",
    top: "280px",
    width: "25%",
    right: "0",
    bottom: "60px",
    overflowY: "scroll",
  };

  render() {
    const { unit, selectedKey } = this.state;
    return (
      <div className="container-fluid">
        <UnitHeader unit={unit} />
        <UnitTabs
          defaultActiveKey="about"
          onSelect={this.handleTabChange}
          tabs={this.tabs}
        />
        <div className="row">
          <div className="col-md-9">
            <UnitTabsContent selectedKey={selectedKey} unit={unit} />
          </div>
          <div className="col-md-3"></div>
        </div>
        <div style={this.timelineStyle} className="border-left">
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
