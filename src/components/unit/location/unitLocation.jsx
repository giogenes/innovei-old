import React, { Component, Fragment } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;
class UnitLocation extends Component {
  availablePtsOptionsFormatter = (cell, row, rowIndex, props) => {
    const { _id: id } = row;
    return (
      <button
        className="btn btn-success"
        onClick={(e) => props.onAddPart(id, e)}
      >
        Add
      </button>
    );
  };

  consumedPtsOptionsFormatter = (cell, row, rowIndex, { props, getPart }) => {};

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
            className="btn btn-success"
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
    const {
      unit,
      availableParts,
      onLocationChange,
      onLocationSelectChange,
      locationSelectValue,
    } = this.props;

    const nextLocations = [
      { _id: "", name: " - ", types: ["New Product", "RMA", "RGA"] },
      ...unit.ticket.location.next,
    ];

    const { parts: consumedParts } = unit;

    return (
      <div className="container">
        <div className="">
          <h2>
            <span className="unbold">{unit.ticket.location.super.name}</span>{" "}
            {unit.ticket.location.name}
          </h2>

          {unit.ticket.location.name === "Under Repair" && (
            <div>
              <div className="bg-light p-3 border rounded mb-3">
                <h4>Consumed Parts</h4>
                <BootstrapTable
                  keyField={"_id"}
                  data={consumedParts}
                  bordered={false}
                  columns={this.consumedPartsColumns}
                />
              </div>
              <div className="bg-light p-3 border rounded">
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
            </div>
          )}
          <h4>Change Location</h4>
          <hr />
          <form onSubmit={onLocationChange}>
            <div className="form-group">
              <label htmlFor=""></label>
              <select
                value={locationSelectValue}
                onChange={onLocationSelectChange}
                className="form-control"
              >
                {nextLocations.map((n) => (
                  <Fragment key={n._id}>
                    {n.types.filter((type) => type === unit.ticket.type)[0] && (
                      <option value={n._id}>{n.name}</option>
                    )}
                  </Fragment>
                ))}
              </select>
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UnitLocation;
