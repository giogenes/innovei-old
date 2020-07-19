import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Toolkit, { Search } from "react-bootstrap-table2-toolkit";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

const { SearchBar } = Search;

class UnitsTable extends Component {
  getSortIcon = (order) => {
    if (order === "asc") return <FontAwesomeIcon icon={icons.faSortUp} />;
    if (order === "desc") return <FontAwesomeIcon icon={icons.faSortDown} />;
    return <FontAwesomeIcon icon={icons.faSort} />;
  };

  columns = [
    {
      dataField: "type.name",
      text: "Unit Type ",
      sort: true,
      sortCaret: this.getSortIcon,
    },
    {
      dataField: "serialNumber",
      text: "Serial Number ",
      sort: true,
      sortCaret: this.getSortIcon,
    },
    {
      dataField: "owner.name",
      text: "Owner ",
      sort: true,
      sortCaret: this.getSortIcon,
    },
    {
      dataField: "location.name",
      text: "Location ",
      sort: true,
      sortCaret: this.getSortIcon,
    },
  ];

  defaultSorted = [
    {
      dataField: "type",
      order: "desc",
    },
  ];

  paginationOptions = {
    showTotal: true,
    alwaysShowAllBtns: true,
  };

  handleRowClick = (e, row, rowIndex) => {
    this.props.history.push(`/units/${row._id}`);
  };

  render() {
    return (
      <Toolkit
        keyField="_id"
        data={this.props.units}
        columns={this.columns}
        search
      >
        {(props) => (
          <main className="container">
            <SearchBar {...props.searchProps} />
            <hr />
            <BootstrapTable
              {...props.baseProps}
              bordered={false}
              pagination={paginationFactory(this.paginationOptions)}
              hover={true}
              rowEvents={{ onClick: this.handleRowClick }}
            />
          </main>
        )}
      </Toolkit>
    );
  }
}

export default UnitsTable;
