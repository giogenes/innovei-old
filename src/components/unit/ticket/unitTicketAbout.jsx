import React, { Fragment } from "react";

const UnitTicketAbout = ({ unit }) => {
  const { ticket } = unit;
  let imageSrc =
    "https://res.cloudinary.com/djuytm4lm/image/upload/v1595347194/shipping-box_kwg7wz.png";
  if (unit.type.pn === "PEG10") {
    imageSrc =
      "https://res.cloudinary.com/djuytm4lm/image/upload/v1596136939/powervision-01_ms7dxp.svg";
  }
  if (
    unit.type.pn === "PRW10" ||
    unit.type.pn === "PRE10" ||
    unit.type.pn === "PRS10"
  )
    imageSrc =
      "https://res.cloudinary.com/djuytm4lm/image/upload/v1596229595/powervision-02_movhhi.svg";

  return (
    <Fragment>
      <h2>
        {ticket.type} <span className="unbold">{ticket.id}</span>
      </h2>
      <div className="row pt-4">
        <div className="col-md-4 container">
          <img alt="" src={imageSrc} className="rounded mx-auto d-block pb-3" />
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <h5>
                  Name <span className="unbold">{ticket.owner.name}</span>
                </h5>
                <h5>
                  Email <span className="unbold">{ticket.owner.email}</span>
                </h5>
                <h5>
                  Phone <span className="unbold">{ticket.owner.phone}</span>
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <h5>
                Address{" "}
                <span className="unbold">
                  {ticket.owner.address} {ticket.owner.address2}
                </span>
              </h5>
              <h5>
                <span className="unbold">
                  {ticket.owner.city} {ticket.owner.state}
                  {", "}
                  {ticket.owner.zipCode} {ticket.owner.country}
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UnitTicketAbout;
