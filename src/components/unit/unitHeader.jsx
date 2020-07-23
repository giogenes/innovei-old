import React from "react";

const unitHeader = ({ unit }) => {
  return (
    <div className="pl-2">
      <h1>
        <span className="text-muted" style={{ fontWeight: "normal" }}>
          Unit{" "}
        </span>
        {unit.serialNumber}
      </h1>
      <div className="ml-3">
        <p className="mb-0">
          {unit.type.manufacturer.name} {unit.type.name} - {unit.type.pn} |
          Location -{" "}
          <span style={{ fontWeight: "bold" }}>
            {unit.ticket.location.name}
          </span>
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Pallet</span> {unit.pallet.id} -{" "}
          {unit.pallet.desc} | Bay {unit.pallet.bay}
        </p>
      </div>
    </div>
  );
};

export default unitHeader;
