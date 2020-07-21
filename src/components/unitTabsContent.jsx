import React from "react";
import UnitTicket from "./unitTicket";
import UnitActions from "./unitActions";

const UnitTabsContent = (props) => {
  const { unit } = props;
  console.log(props.selectedKey);
  return (
    <div>
      <div className="container-fluid" style={{ paddingTop: 30 }}>
        {props.selectedKey === "ticket" && <UnitTicket unit={unit} />}
        {props.selectedKey === "actions" && <UnitActions unit={unit} />}
      </div>
    </div>
  );
};

export default UnitTabsContent;
