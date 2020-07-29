import React, { Component } from "react";
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

  selectRow = {
    mode: "checkbox",
    clickToSelect: true,
  };

  render() {
    const procedure = TestProcedureService.getTestProcedureByUnitTypeId(
      this.props.unit.type._id
    ).procedure;
    console.log(procedure);

    return (
      <BootstrapTable
        keyField="_id"
        data={procedure}
        columns={this.columns}
        selectRow={this.selectRow}
        hover={true}
      />
    );
  }
}

export default UnitLocationTesting;
