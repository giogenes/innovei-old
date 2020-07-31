import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import TraditionalRepair from "./traditionalRepair";
import RepairTypeButtons from "./repairTypeButtons";
import NonStandardRepair from "./nonStandardRepair";

class UnitLocationRepair extends Component {
  state = {
    repairType: "traditional",
  };

  addPartsClasses(id) {
    const index = this.props.availableParts.findIndex(
      (part) => part._id === id
    );

    if (this.props.availableParts[index].amount === 0) {
      return "btn btn-success disabled";
    }
    return "btn btn-success";
  }

  addRepairTypeButtonClasses = (type) => {
    if (this.state.repairType === type) return "btn btn-secondary mb-2 ml-2";

    return "btn btn-secondary mb-2 ml-2 disabled";
  };

  getSortIcon = (order) => {
    if (order === "asc") return <FontAwesomeIcon icon={icons.faSortUp} />;
    if (order === "desc") return <FontAwesomeIcon icon={icons.faSortDown} />;
    return <FontAwesomeIcon icon={icons.faSort} />;
  };

  handleTraditionalRepairClick = (e) => {
    this.setState({ repairType: "traditional" });
  };

  handleNonStandardRepairClick = (e) => {
    this.setState({ repairType: "nonStandard" });
  };

  consumedPartsColumns = [
    {
      dataField: "name",
      text: "Part Name",
    },
    {
      dataField: "pn",
      text: "Part Number",
    },
    {
      dataField: "amount",
      text: "Amount",
    },
    {
      dataField: "options",
      text: "Options",
      dummyColumn: "true",
      formatExtraData: this.props,
      formatter: (cell, row, rowIndex, props) => {
        return (
          <button
            className="btn btn-danger"
            onClick={(e) => props.onRemovePart(row._id, e)}
          >
            Remove
          </button>
        );
      },
      rank: false,
    },
  ];

  availablePartsColumns = [
    {
      dataField: "name",
      text: "Part Name ",
      sort: true,
      sortCaret: this.getSortIcon,
    },
    {
      dataField: "pn",
      text: "Part Number ",
      sort: true,
      sortCaret: this.getSortIcon,
    },
    {
      dataField: "amount",
      text: "Amount ",
      sort: true,
      sortCaret: this.getSortIcon,
    },
    {
      dataField: "options",
      text: "Options",
      dummyColumn: "true",
      formatExtraData: this.props,
      formatter: (cell, row, rowIndex, props) => {
        return (
          <button
            className={this.addPartsClasses(row._id)}
            onClick={(e) => props.onAddPart(row._id, e)}
          >
            Add
          </button>
        );
      },
      rank: false,
    },
  ];

  paginationOptions = {
    showTotal: true,
    alwaysShowAllBtns: true,
    hideSizePerPage: true,
  };

  render() {
    const { availableParts, consumedParts } = this.props;

    return (
      <div>
        <RepairTypeButtons
          onTraditionalRepairClick={this.handleTraditionalRepairClick}
          onNonStandardRepairClick={this.handleNonStandardRepairClick}
          repairTypeButtonClasses={this.addRepairTypeButtonClasses}
        />

        {this.state.repairType === "traditional" && (
          <TraditionalRepair
            availablePartsColumns={this.availablePartsColumns}
            availableParts={availableParts}
            consumedParts={consumedParts}
            consumedPartsColumns={this.consumedPartsColumns}
            paginationOptions={this.paginationOptions}
          />
        )}
        {this.state.repairType === "nonStandard" && <NonStandardRepair />}
      </div>
    );
  }
}

export default UnitLocationRepair;
