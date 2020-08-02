import React from "react";
import * as dateService from "../../../services/dateService";

const UnitTimelineNote = ({ t }) => {
  return (
    <div className="card bg-light">
      <div className="card-body">
        <h5 style={{ marginBottom: "0" }}>
          Note -{" "}
          <span className="text-muted" style={{ fontWeight: "normal" }}>
            {t.content.author}
          </span>
        </h5>
        <h5 className="card-title text-muted lead">
          <small>
            {dateService.getDay(t.date)}, {dateService.getMonth(t.date)}{" "}
            {dateService.getDate(t.date)}, {dateService.getYear(t.date)} at{" "}
            {dateService.getTime(t.date)}
          </small>
        </h5>
        <p className="card-text">{t.content.note}</p>
      </div>
    </div>
  );
};

export default UnitTimelineNote;
