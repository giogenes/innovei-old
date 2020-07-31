import React from "react";
import UnitTimelineForm from "./unitTimelineForm";
import UnitTimelineContent from "./unitTimelineContent";

const unitTimeline = ({
  unit,
  timelineInputValue,
  onChange,
  onSubmit,
  errors,
}) => {
  const { timeline } = unit;

  return (
    <div className="ml-2 mr-3">
      <h3>Timeline</h3>
      <UnitTimelineForm
        timelineInputValue={timelineInputValue}
        onChange={onChange}
        onSubmit={onSubmit}
        errors={errors}
      />
      <UnitTimelineContent timeline={timeline} />
    </div>
  );
};

export default unitTimeline;
