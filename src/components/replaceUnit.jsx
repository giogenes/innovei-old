import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ReplaceUnit = ({ unit, id }) => {
  return (
    <div className="ml-3 mt-3">
      <Link to={`/units/${id}/ticket`}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </Link>
      <div className="container">
        <h2>Replace Unit</h2>
      </div>
    </div>
  );
};

export default ReplaceUnit;
