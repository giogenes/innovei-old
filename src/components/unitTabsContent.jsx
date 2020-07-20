import React from "react";

const UnitTabsContent = (props) => {
  const { owner, parts } = props.unit;
  return (
    <div>
      <div className="container-fluid" style={{ paddingTop: 30 }}>
        {props.selectedKey === "about" && (
          <div>
            <ul id="progress">
              <li>Step 1</li>
              <li class="">Step 2</li>
              <li class="active">Step 3</li>
            </ul>
            <h5>
              Name <span style={{ fontWeight: "normal" }}>{owner.name}</span>
            </h5>
            <h5>
              Address{" "}
              <span style={{ fontWeight: "normal" }}>
                {owner.address} {owner.address2}
              </span>
            </h5>
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
