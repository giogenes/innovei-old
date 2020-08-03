import React from "react";

import UnitTicketAbout from "./unitTicketAbout";
import UnitTicketOptions from "./unitTicketOptions";

const UnitTicket = ({ unit, id }) => {
  return (
    <div className="container pt-4">
      <UnitTicketAbout unit={unit} />
      <UnitTicketOptions unit={unit} id={id} />
    </div>
  );
};

export default UnitTicket;
