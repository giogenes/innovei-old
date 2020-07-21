import React from "react";
import UnitTicket from "./unitTicket";
import UnitActions from "./unitActions";
import ReplaceUnit from "./replaceUnit";
import { Route, Redirect } from "react-router-dom";
import EditTicket from "./editTicket";

const UnitTabsContent = (props) => {
  const { unit, id } = props;

  return (
    <div className="unit-tab-content">
      {(unit.ticket.type === "RMA" || unit.ticket.type === "RGA") && (
        <Route
          path={`/units/${id}/ticket/replace-unit`}
          render={(props) => <ReplaceUnit {...props} unit={unit} id={id} />}
        />
      )}

      <Route
        path={`/units/${id}/ticket/edit-ticket`}
        render={(props) => <EditTicket {...props} unit={unit} id={id} />}
      />
      <Route
        path={`/units/${id}/ticket`}
        exact
        render={(props) => <UnitTicket {...props} unit={unit} id={id} />}
      />
      <Route
        path={`/units/${id}/actions`}
        render={(props) => <UnitActions {...props} unit={unit} />}
      />
      <Redirect to={`/units/${id}/ticket`} />
    </div>
  );
};

export default UnitTabsContent;
