import React from "react";

const UnitTabsContent = (props) => {
  const { owner, parts } = props.unit;
  return (
    <div>
      <div className="container-fluid" style={{ paddingTop: 30 }}>
        {props.selectedKey === "ticket" && <div></div>}
        {props.selectedKey === "action" && (
          <div>
            <ul id="progress">
              <li>Pending Diagnostics</li>
              <li class="">Under Diagnostics</li>
              <li class="active">Under Repair</li>
            </ul>
          </div>
        )}
        {props.selectedKey === "parts" && (
          <div className="container">
            <br />
            {parts.map((part) => (
              <p key={part._id}>{part.name}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UnitTabsContent;
