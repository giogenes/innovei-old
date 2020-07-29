import React from "react";

const UnitLocationDiagnostics = ({ name }) => {
  return (
    <div className="container mt-3 mb-5">
      <p>
        This unit is currently in '{name}' location. Once the unit can move on
        from its current location, please select one of the below locations and
        press 'Enter'
      </p>
      <p>
        If you would like to begin repairing this unit, please move it to 'Under
        Repair'. If you would like to move it to anyother diagnostic location,
        please move it to that respective location.
      </p>
    </div>
  );
};

export default UnitLocationDiagnostics;
