import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

const { SearchBar } = Search;

class UnitLocationRepair extends Component {
  addPartsClasses(id) {
    const index = this.props.availableParts.findIndex(
      (part) => part._id === id
    );

    if (this.props.availableParts[index].amount === 0) {
      return "btn btn-success disabled";
    }
    return "btn btn-success";
  }

  getSortIcon = (order) => {
    if (order === "asc") return <FontAwesomeIcon icon={icons.faSortUp} />;
    if (order === "desc") return <FontAwesomeIcon icon={icons.faSortDown} />;
    return <FontAwesomeIcon icon={icons.faSort} />;
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
      dataField: "amount ",
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
        <div className="bg-light p-3 border rounded mb-3">
          <ToolkitProvider
            keyField="_id"
            data={availableParts}
            columns={this.availablePartsColumns}
            search
          >
            {(props) => (
              <div>
                <h4>Available Parts</h4>

                <SearchBar {...props.searchProps} />
                <hr />
                <BootstrapTable
                  {...props.baseProps}
                  bordered={false}
                  pagination={paginationFactory(this.paginationOptions)}
                />
              </div>
            )}
          </ToolkitProvider>
        </div>
        <div className="bg-light p-3 border rounded">
          <h4>Consumed Parts</h4>
          <BootstrapTable
            keyField={"_id"}
            data={consumedParts}
            bordered={false}
            columns={this.consumedPartsColumns}
          />
        </div>
      </div>
    );
  }
}

export default UnitLocationRepair;
