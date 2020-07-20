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
        {unit.type.manufacturer.name} {unit.type.pn} - {unit.type.name} |
        Location - {unit.location.name}
      </p>
    </Fragment>
  );
};

export default unitHeader;
