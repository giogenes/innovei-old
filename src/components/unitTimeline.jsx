import React from "react";
import UnitTimelineForm from "./unitTimelineForm";
import * as dateService from "./../services/dateService";

const unitTimeline = (props) => {
  const { notes } = props.unit;
  return (
    <div className="ml-2 mr-2 mt-4">
      <h3>Timeline</h3>
      <UnitTimelineForm
        timelineInputValue={props.timelineInputValue}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
      />
      {notes.map((note) => (
        <div key={note.date + note.content} className="card bg-light">
          <div className="card-body">
            <h5 style={{ marginBottom: "0" }}>
              {note.location.name} -{" "}
              <span className="text-muted" style={{ fontWeight: "normal" }}>
                {note.author}
              </span>
            </h5>
            <h5 className="card-title text-muted lead">
              <small>
                {dateService.getDay(note.date)},{" "}
                {dateService.getMonth(note.date)}{" "}
                {dateService.getDate(note.date)},{" "}
                {dateService.getYear(note.date)} at{" "}
                {dateService.getTime(note.date)}
              </small>
            </h5>
            <p className="card-text">{note.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default unitTimeline;
