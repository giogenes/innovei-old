import React, { Component } from "react";

class ChangeLocationForm extends Component {
  submitButtonClasses() {
    if (this.props.errors.locationSelectValue)
      return "btn btn-primary mt-2 disabled";
    return "btn btn-primary mt-2";
  }

  selectClasses() {
    if (this.props.errors.locationSelectValue) return "form-control is-invalid";
    return "form-control mt-2";
  }

  render() {
    const {
      onLocationChange,
      locationSelectValue,
      onLocationSelectChange,
      errors,
    } = this.props;

    const nextLocations = [
      { _id: "", name: " - ", types: ["New Product", "RMA", "RGA"] },
      ...this.props.unit.ticket.location.next,
    ];

    const filteredLocations = nextLocations.filter(
      (location) =>
        location.types.filter((type) => type === this.props.unit.ticket.type)
          .length > 0
    );

    return (
      <div className="col-md-4 pl-0">
        <form onSubmit={onLocationChange}>
          <h3 className="unbold">Change Location</h3>
          <div className="form-group">
            <select
              value={locationSelectValue}
              onChange={onLocationSelectChange}
              className={this.selectClasses()}
            >
              {filteredLocations.map((n) => (
                <option key={n._id} value={n._id}>
                  {n.name}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">{errors.locationSelectValue}</div>
          </div>
          <button type="submit" className={this.submitButtonClasses()}>
            Enter
          </button>
        </form>
      </div>
    );
  }
}

export default ChangeLocationForm;
