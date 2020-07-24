import React from "react";
import UnitLocationRepair from "./unitLocationRepair";
import ChangeLocationForm from "./changeLocationForm";
import UnitLocationHeader from "./unitLocationHeader";

const UnitLocation = ({
  unit,
  availableParts,
  onLocationChange,
  onLocationSelectChange,
  onAddPart,
  onRemovePart,
  locationSelectValue,
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
          />
        )}
        <hr />
        <ChangeLocationForm
          onLocationChange={onLocationChange}
          locationSelectValue={locationSelectValue}
          onLocationSelectChange={onLocationSelectChange}
          unit={unit}
        />
      </div>
    </div>
  );
};

export default UnitLocation;
