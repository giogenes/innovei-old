import React, { Fragment } from "react";
import UnitTimelineNote from "./unitTimelineNote";
import UnitTimelineMovement from "./unitTimelineMovement";
import UnitTimelinePart from "./unitTimelinePart";

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
            <UnitTimelineNote key={t.date + t.content} t={t} />
          )}
          {t.type === "movement" && (
            <UnitTimelineMovement key={t.date + t.content} t={t} />
          )}
          {t.type === "part" && (
            <UnitTimelinePart key={t.date + t.content} t={t} />
          )}
        </div>
      ))}
    </Fragment>
  );
};

export default UnitTimelineContent;
