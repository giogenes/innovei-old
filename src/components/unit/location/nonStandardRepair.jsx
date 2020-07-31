import React from "react";

const NonStandardRepair = () => {
  return (
    <div className="col-md-8 pl-0">
      <form>
        <div className="form-group">
          <label for="repairDescription">Repair Description</label>
          <textarea
            className="form-control"
            id="repairDescription"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <label for="time">Enter Time for Repair</label>
          <input className="form-control" id="time" placeholder="1:00" />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Add Repair
          </button>
        </div>
      </form>
    </div>
  );
};

export default NonStandardRepair;
