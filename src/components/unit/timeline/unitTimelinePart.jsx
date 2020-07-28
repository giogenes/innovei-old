import React from "react";
import * as dateService from "../../../services/dateService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

const UnitTimelinePart = ({ t }) => {
  return (
    <div className="card bg-dark ml-5 mr-5">
      <div className="">
        <h5
          className="text-center pt-2 text-white"
          style={{ marginBottom: "0" }}
        >
          <FontAwesomeIcon icon={icons.faMicrochip} /> Part {t.content.action}
        </h5>
        <h5 className="text-center card-title text-light font-light-weight mb-0">
          <small>
            {dateService.getMonth(t.date)} {dateService.getDate(t.date)},{" "}
            {dateService.getYear(t.date)}
            {", "}
            {dateService.getTime(t.date)}
          </small>
        </h5>
        <p className="card-text text-light text-center mb-2">
          {t.content.partName}
        </p>
      </div>
    </div>
  );
};

export default UnitTimelinePart;
