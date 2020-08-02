import React from "react";
import UnitTicket from "./ticket/unitTicket";
import UnitLocation from "./location/unitLocation";
import ReplaceUnit from "./ticket/replaceUnit";
import { Route, Redirect } from "react-router-dom";
import EditTicket from "./ticket/editTicket";

const UnitTabsContent = ({
  unit,
  availableParts,
  id,
  onLocationChange,
  onLocationSelectChange,
  locationSelectValue,
  onRemovePart,
  onAddPart,
  errors,
  repairDiscriptionValue,
  onRepairDiscriptionChange,
  repairTimeValue,
  onRepairTimeChange,
  onNSRSubmit,
}) => {
  return (
    <div className="unit-tab-content pt-5">
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
        path={`/units/${id}/location`}
        render={(props) => (
          <UnitLocation
            onRemovePart={onRemovePart}
            onAddPart={onAddPart}
            onLocationChange={onLocationChange}
            locationSelectValue={locationSelectValue}
            {...props}
            unit={unit}
            availableParts={availableParts}
            onLocationSelectChange={onLocationSelectChange}
            errors={errors}
            repairDiscriptionValue={repairDiscriptionValue}
            onRepairDiscriptionChange={onRepairDiscriptionChange}
            repairTimeValue={repairTimeValue}
            onRepairTimeChange={onRepairTimeChange}
            onNSRSubmit={onNSRSubmit}
          />
        )}
      />
      <Redirect to={`/units/${id}/ticket`} />
    </div>
  );
};

export default UnitTabsContent;
