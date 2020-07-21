import React, { Fragment } from "react";
import * as dateService from "./../services/dateService";

const UnitTimelineContent = ({ notes }) => {
  return (
    <Fragment>
      {!notes[0] && (
        <h2 className="mt-5 text-center text-muted font-weight-light">
          No Activity Yet
        </h2>
      )}
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
    </Fragment>
  );
};

export default UnitTimelineContent;
