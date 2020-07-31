import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const TraditionalRepair = ({
  availablePartsColumns,
  availableParts,
  consumedPartsColumns,
  consumedParts,
  paginationOptions,
}) => {
  return (
    <div>
      <div className="bg-light p-3 border rounded mb-3">
        <ToolkitProvider
          keyField="_id"
          data={availableParts}
          columns={availablePartsColumns}
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
                pagination={paginationFactory(paginationOptions)}
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
          columns={consumedPartsColumns}
        />
      </div>
    </div>
  );
};

export default TraditionalRepair;
