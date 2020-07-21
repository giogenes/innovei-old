import React from "react";
import UnitTimelineForm from "./unitTimelineForm";
import UnitTimelineContent from "./unitTimelineContent";

const unitTimeline = ({ unit, timelineInputValue, onChange, onSubmit }) => {
  const { notes } = unit;

  return (
    <div className="ml-2 mr-3">
      <h3>Timeline</h3>
      <UnitTimelineForm
        timelineInputValue={timelineInputValue}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <UnitTimelineContent notes={notes} />
    </div>
  );
};

export default unitTimeline;
