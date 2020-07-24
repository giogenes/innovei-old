import React, { Fragment } from "react";

const ChangeLocationForm = ({
  onLocationChange,
  locationSelectValue,
  onLocationSelectChange,
  unit,
}) => {
  const nextLocations = [
    { _id: "", name: " - ", types: ["New Product", "RMA", "RGA"] },
    ...unit.ticket.location.next,
  ];

  return (
    <form onSubmit={onLocationChange}>
      <h2>Change Location</h2>
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
  );
};

export default ChangeLocationForm;
