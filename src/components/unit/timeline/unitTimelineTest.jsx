import React from "react";
import * as dateService from "../../../services/dateService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

const UnitTimelineRepair = ({ t }) => {
  return (
    <div className="card bg-dark ml-5 mr-5">
      <div className="">
        <h6
          className="text-center pt-2 text-white"
          style={{ marginBottom: "0" }}
        >
          <FontAwesomeIcon icon={icons.faTachometerAlt} /> Unit Tested
        </h6>
        <p className="text-center card-title text-light font-light-weight mb-0">
          <small>
            {dateService.getMonth(t.date)} {dateService.getDate(t.date)},{" "}
            {dateService.getYear(t.date)}
            {", "}
            {dateService.getTime(t.date)}
          </small>
        </p>
        <p className="card-text text-light text-center mb-2">
          {t.passed ? <span>Passed</span> : <span>Failed</span>}
        </p>
      </div>
    </div>
  );
};

export default UnitTimelineRepair;
