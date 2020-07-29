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
    <div className="col-md-4">
      <form onSubmit={onLocationChange}>
        <h3 className="unbold">Change Location</h3>
        <div className="form-group">
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
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeLocationForm;
