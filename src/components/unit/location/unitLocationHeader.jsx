import React from "react";

const UnitLocationHeader = (props) => {
  const { location } = props.unit.ticket;
  return (
    <h2>
      <span className="unbold">{location.super.name}</span> {location.name}
    </h2>
  );
};

export default UnitLocationHeader;
