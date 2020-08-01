import React from "react";
import UnitLocationRepair from "./unitLocationRepair";
import ChangeLocationForm from "./changeLocationForm";
import UnitLocationHeader from "./unitLocationHeader";
import UnitLocationDiagnostics from "./unitLocationDiagnostics";
import UnitLocationTesting from "./unitLocationTesting";

const UnitLocation = ({
  unit,
  availableParts,
  onLocationChange,
  onLocationSelectChange,
  onAddPart,
  onRemovePart,
  locationSelectValue,
  errors,
  repairDiscriptionValue,
  onRepairDiscriptionChange,
  repairTimeValue,
  onRepairTimeChange,
}) => {
  const { parts: consumedParts } = unit;

  return (
    <div className="container">
      <div className="">
        <UnitLocationHeader unit={unit} />
        {unit.ticket.location.name === "Under Repair" && (
          <UnitLocationRepair
            consumedParts={consumedParts}
            availableParts={availableParts}
            onAddPart={onAddPart}
            onRemovePart={onRemovePart}
            repairDiscriptionValue={repairDiscriptionValue}
            onRepairDiscriptionChange={onRepairDiscriptionChange}
            repairTimeValue={repairTimeValue}
            onRepairTimeChange={onRepairTimeChange}
            errors={errors}
          />
        )}
        {unit.ticket.location.super.name === "Under Diagnostics" && (
          <UnitLocationDiagnostics name={unit.ticket.location.name} />
        )}
        {unit.ticket.location.name === "Testing" && (
          <UnitLocationTesting unit={unit} />
        )}
        <hr />
        <ChangeLocationForm
          onLocationChange={onLocationChange}
          locationSelectValue={locationSelectValue}
          onLocationSelectChange={onLocationSelectChange}
          unit={unit}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default UnitLocation;
