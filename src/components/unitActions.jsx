import React, { Fragment } from "react";

const UnitActions = ({ unit }) => {
  return (
    <div className="mt-5">
      <ul id="progress">
        <li>Pending Diagnostics</li>
        <li className="">Under Diagnostics</li>
        <li className="active">Under Repair</li>
      </ul>

      {unit.ticket.location.super.name}
      <form class="col-sm-5" action="">
        <div className="form-group">
          <label htmlFor=""></label>
          <select name="" id="" className="form-control">
            <option value="">This</option>
            <option value="">T</option>
            <option value="">t</option>
            <option value="">t</option>
            <option value="">t</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default UnitActions;
