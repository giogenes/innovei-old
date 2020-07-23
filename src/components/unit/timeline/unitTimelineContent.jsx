import React, { Fragment } from "react";
import * as dateService from "../../../services/dateService";

const UnitTimelineContent = ({ timeline }) => {
  return (
    <Fragment>
      {!timeline[0] && (
        <h2 className="mt-5 text-center text-muted font-weight-light">
          No Activity Yet
        </h2>
      )}
      {timeline.map((t) => (
        <div key={t.date + t.content}>
          {t.type === "note" && (
            <div key={t.date + t.content} className="card bg-light">
              <div className="card-body">
                <h5 style={{ marginBottom: "0" }}>
                  {t.location.name} -{" "}
                  <span className="text-muted" style={{ fontWeight: "normal" }}>
                    {t.author}
                  </span>
                </h5>
                <h5 className="card-title text-muted lead">
                  <small>
                    {dateService.getDay(t.date)}, {dateService.getMonth(t.date)}{" "}
                    {dateService.getDate(t.date)}, {dateService.getYear(t.date)}{" "}
                    at {dateService.getTime(t.date)}
                  </small>
                </h5>
                <p className="card-text">{t.content}</p>
              </div>
            </div>
          )}
          {t.type === "movement" && (
            <div key={t.date + t.content} className="card bg-dark ml-5 mr-5">
              <div className="">
                <h5
                  className="text-center pt-2 text-white"
                  style={{ marginBottom: "0" }}
                >
                  Move to {t.location.name}
                </h5>
                <h5 className="text-center card-title text-light font-light-weight">
                  <small>
                    {dateService.getMonth(t.date)} {dateService.getDate(t.date)}
                    , {dateService.getYear(t.date)}
                    {", "}
                    {dateService.getTime(t.date)}
                  </small>
                </h5>
                <p className="card-text">{t.content}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </Fragment>
  );
};

export default UnitTimelineContent;
