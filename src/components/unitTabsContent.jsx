import React from "react";
import UnitTicket from "./unitTicket";
import UnitActions from "./unitActions";
import { Route, Redirect } from "react-router-dom";

const UnitTabsContent = (props) => {
  const { unit, id } = props;

  return (
    <div>
      <Route
        path={`/units/${id}/ticket`}
        render={(props) => <UnitTicket {...props} unit={unit} />}
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
