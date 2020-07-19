import React, { Component } from "react";
import { getUnit } from "../services/unitService";

class Unit extends Component {
  state = {
    unit: {},
  };

  componentDidMount() {
    const { match, history } = this.props;
    const unit = getUnit(match.params.id);
    if (!unit) history.replace("/not-found");
    console.log(unit);
    this.setState({ unit });
  }
  render() {
    return <h1>Unit {this.state.unit.serialNumber}</h1>;
  }
}

export default Unit;
