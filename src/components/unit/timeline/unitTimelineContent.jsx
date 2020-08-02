import React, { Fragment } from "react";
import UnitTimelineNote from "./unitTimelineNote";
import UnitTimelineMovement from "./unitTimelineMovement";
import UnitTimelineRepair from "./unitTimelineRepair";
import UnitTimelineTest from "./unitTimelineTest";
import _ from "lodash";

const UnitTimelineContent = ({ timeline }) => {
  const sortedTimeline = _.orderBy(timeline, ["date"], ["desc"]);

  return (
    <Fragment>
      {!sortedTimeline[0] && (
        <h2 className="mt-5 text-center text-muted font-weight-light">
          No Activity Yet
        </h2>
      )}
      {sortedTimeline.map((t) => (
        <div key={t.date + t.type}>
          {t.type === "note" && <UnitTimelineNote t={t} />}
          {t.type === "movement" && <UnitTimelineMovement t={t} />}
          {t.type === "repair" && <UnitTimelineRepair t={t} />}
          {t.type === "test" && <UnitTimelineTest t={t} />}
        </div>
      ))}
    </Fragment>
  );
};

export default UnitTimelineContent;
