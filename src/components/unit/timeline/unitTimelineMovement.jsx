import React from "react";
import * as dateService from "../../../services/dateService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

const UnitTimelineMovement = ({ t }) => {
  return (
    <div className="card bg-dark ml-5 mr-5">
      <div className="">
        <h6
          className="text-center pt-2 text-white"
          style={{ marginBottom: "0" }}
        >
          <FontAwesomeIcon icon={icons.faCompass} /> Moved to {t.location.name}
        </h6>
        <p className="text-center card-title text-light font-light-weight">
          <small>
            {dateService.getMonth(t.date)} {dateService.getDate(t.date)},{" "}
            {dateService.getYear(t.date)}
            {", "}
            {dateService.getTime(t.date)}
          </small>
        </p>
        <p className="card-text">{t.content}</p>
      </div>
    </div>
  );
};

export default UnitTimelineMovement;
