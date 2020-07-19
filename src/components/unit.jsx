import React, { Component } from "react";
import { getUnit } from "../services/unitService";
import { Nav } from "react-bootstrap";
import UnitHeader from "./unitHeader";

class Unit extends Component {
  state = {
    unit: {
      type: {
        manufacturer: {},
      },
      serialNumber: "",
      owner: {},
      location: {},
      parts: [],
      notes: [],
    },
    selectedKey: "about",
  };

  componentDidMount() {
    const { match, history } = this.props;
    const unit = getUnit(match.params.id);
    if (!unit) history.replace("/not-found");
    this.setState({ unit });
  }

  handleTabChange = (selectedKey) => {
    console.log(selectedKey);
    this.setState({ selectedKey });
  };

  render() {
    return (
      <div>
        <div className="container">
          <UnitHeader unit={this.state.unit} />
        </div>
        <div className="container-fluid">
          <Nav
            variant="tabs"
            defaultActiveKey="about"
            onSelect={this.handleTabChange}
          >
            <Nav.Item>
              <Nav.Link eventKey="about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="parts">Parts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        {this.state.selectedKey === "about" && (
          <div className="container-fluid" style={{ paddingTop: 30 }}>
            <div className="row">
              <div className="col-md-9">
                <h5>
                  Name{" "}
                  <span style={{ fontWeight: "normal" }}>
                    {this.state.unit.owner.name}
                  </span>
                </h5>
                <h5>
                  Address{" "}
                  <span style={{ fontWeight: "normal" }}>
                    {this.state.unit.owner.address}
                  </span>
                </h5>
              </div>
              <div className="col-md-3 border-left">
                <h3>Timeline</h3>
                <form>
                  <div class="form-group">
                    <textarea
                      placeholder="Add a note"
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </form>
                <div class="card">
                  <div class="card-body">
                    <h5 style={{ marginBottom: "0" }}>
                      A Stock -{" "}
                      <span
                        className="text-muted"
                        style={{ fontWeight: "normal" }}
                      >
                        Giovanni Leon
                      </span>
                    </h5>
                    <h5 class="card-title text-muted lead">
                      <small>@ Dec. 14, 2020 4:39 PM</small>
                    </h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {this.state.selectedKey === "parts" && (
          <div className="container">
            <br />
            {this.state.unit.parts.map((part) => (
              <p key={part._id}>{part.name}</p>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Unit;
