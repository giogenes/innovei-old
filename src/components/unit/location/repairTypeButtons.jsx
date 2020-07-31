import React from "react";
const RepairTypeButtons = ({
  onTraditionalRepairClick,
  onNonStandardRepairClick,
  repairTypeButtonClasses,
}) => {
  return (
    <div className="mt-4 mb-4">
      <button
        className={repairTypeButtonClasses("traditional")}
        onClick={onTraditionalRepairClick}
      >
        Traditional Repair
      </button>
      <button
        className={repairTypeButtonClasses("nonStandard")}
        onClick={onNonStandardRepairClick}
      >
        Non-Standard Repair
      </button>
    </div>
  );
};

export default RepairTypeButtons;
