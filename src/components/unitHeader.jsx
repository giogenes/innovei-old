import React, { Fragment } from "react";

const unitHeader = ({ unit }) => {
  return (
    <Fragment>
      <h1>
        <span className="text-muted" style={{ fontWeight: "normal" }}>
          Unit{" "}
        </span>
        {unit.serialNumber}
      </h1>
      <p>
        {unit.type.manufacturer.name} {unit.type.name} - {unit.type.pn} |
        Location -{" "}
        <span style={{ fontWeight: "bold" }}>{unit.ticket.location.name}</span>
      </p>
    </Fragment>
  );
};

export default unitHeader;
