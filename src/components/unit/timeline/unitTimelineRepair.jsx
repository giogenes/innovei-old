import React, { Fragment } from "react";
import * as dateService from "../../../services/dateService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

const UnitTimelineRepair = ({ t }) => {
  return (
    <Fragment>
      {t.items.map((item) => (
        <div className="card bg-dark ml-5 mr-5" key={item.date + item.partName}>
          <div className="">
            <h6
              className="text-center pt-2 text-white"
              style={{ marginBottom: "0" }}
            >
              {item.type === "partAdded" && (
                <span>
                  <FontAwesomeIcon icon={icons.faMicrochip} /> Part Added
                </span>
              )}
              {item.type === "partRemoved" && (
                <span>
                  <FontAwesomeIcon icon={icons.faMicrochip} /> Part Removed
                </span>
              )}
              {item.type === "nonStandardRepair" && (
                <span>
                  <FontAwesomeIcon icon={icons.faHammer} /> Non-Standard Repair
                </span>
              )}
            </h6>
            <p className="text-center card-title text-light font-light-weight mb-0">
              <small>
                {dateService.getMonth(item.date)}{" "}
                {dateService.getDate(item.date)},{" "}
                {dateService.getYear(item.date)}
                {", "}
                {dateService.getTime(item.date)}
              </small>
            </p>
            {(item.type === "partAdded" || item.type === "partRemoved") && (
              <p className="card-text text-light text-center mb-2">
                {item.partName}
              </p>
            )}
            {item.type === "nonStandardRepair" && (
              <p className="card-text text-light text-center mb-2">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default UnitTimelineRepair;
