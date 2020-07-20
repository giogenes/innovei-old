import React from "react";

const UnitTimelineForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group mb-3">
        <textarea
          placeholder="Add a note..."
          className="form-control"
          id="timelineTextarea"
          rows="3"
          value={props.timelineInputValue}
          onChange={props.onChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className="btn-sm mb-3 btn btn-primary"
        value="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default UnitTimelineForm;
