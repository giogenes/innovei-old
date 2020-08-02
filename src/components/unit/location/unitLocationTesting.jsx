import React, { Component, Fragment } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import * as TestProcedureService from "./../../../services/testProcedureService";

class UnitLocationTesting extends Component {
  columns = [
    {
      dataField: "name",
      text: "Name",
    },
    {
      dataField: "procedure",
      text: "Procedure",
    },
    {
      dataField: "time",
      text: "Estimated Time",
    },
  ];

  render() {
    const selectRow = {
      mode: "checkbox",
      clickToSelect: true,
      selected: this.props.selectedTestItems,
      onSelect: this.props.onSelectTestItem,
      onSelectAll: this.props.onSelectAllTestItems,
    };

    const procedure = TestProcedureService.getTestProcedureByUnitTypeId(
      this.props.unit.type._id
    ).procedure;

    return (
      <Fragment>
        <BootstrapTable
          keyField="_id"
          data={procedure}
          columns={this.columns}
          selectRow={selectRow}
          hover={true}
        />
        <button onClick={this.props.onTestSubmit} className="btn btn-primary">
          Submit Test
        </button>
      </Fragment>
    );
  }
}

export default UnitLocationTesting;
