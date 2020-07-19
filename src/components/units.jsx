import React, { Component } from "react";
import { getUnits } from "../services/unitService";
import UnitsTable from "./unitsTable";

class Units extends Component {
  state = {
    units: [],
  };

  componentDidMount() {
    const units = getUnits();
    this.setState({ units });
  }

  render() {
    return (
      <div className="container">
        <UnitsTable history={this.props.history} units={this.state.units} />
      </div>
    );
  }
}

export default Units;
