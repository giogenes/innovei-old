import React from "react";

const UnitTicket = ({ unit }) => {
  return (
    <div className="container">
      <h2>
        {unit.ticket.type} <span className="unbold">{unit.ticket.id}</span>
      </h2>
      <div className="row pt-4">
        <div className="col-sm-4">
          <img
            alt=""
            src="https://via.placeholder.com/200"
            className="rounded mx-auto d-block pb-3"
          />
        </div>
        <div className="col-sm-8">
          <div className="row">
            <div className="col-md-6">
              <div>
                <h5>
                  Name <span className="unbold">{unit.ticket.owner.name}</span>
                </h5>
                <h5>
                  Email{" "}
                  <span className="unbold">{unit.ticket.owner.email}</span>
                </h5>
                <h5>
                  Phone{" "}
                  <span className="unbold">{unit.ticket.owner.phone}</span>
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <h5>
                Address{" "}
                <span className="unbold">
                  {unit.ticket.owner.address} {unit.ticket.owner.address2}
                </span>
              </h5>
              <h5>
                <span className="unbold">
                  {unit.ticket.owner.city} {unit.ticket.owner.state}
                  {", "}
                  {unit.ticket.owner.zipCode} {unit.ticket.owner.country}
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitTicket;
