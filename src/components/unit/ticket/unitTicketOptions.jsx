import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class UnitTicketOptions extends Component {
  handleReplaceUnit = (id) => {
    this.props.history.push(`/units/${id}/ticket/replace-unit`);
  };
  handleEditTicket = (id) => {
    this.props.history.push(`/units/${id}/ticket/edit-ticket`);
  };
  render() {
    const { id, unit } = this.props;

    return (
      <div className="pt-5">
        <h2>Options</h2>
        <hr />
        <div className="pl-4">
          {(unit.ticket.type === "RMA" || unit.ticket.type === "RGA") && (
            <button
              onClick={() => this.handleReplaceUnit(id)}
              className="btn btn-warning mr-3"
            >
              Replace Unit
            </button>
          )}

          <button
            onClick={() => this.handleEditTicket(id)}
            className="btn btn-warning mr-3"
          >
            Edit Ticket
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(UnitTicketOptions);
