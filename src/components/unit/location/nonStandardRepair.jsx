import React, { Component } from "react";

class NonStandardRepair extends Component {
  repairDiscriptionClasses() {
    if (this.props.errors.repairDiscriptionValue)
      return "form-control is-invalid";
    return "form-control";
  }

  repairTimeClasses() {
    if (this.props.errors.repairTimeValue) return "form-control is-invalid";
    return "form-control";
  }

  render() {
    const {
      repairDiscriptionValue,
      onRepairDiscriptionChange,
      repairTimeValue,
      onRepairTimeChange,
      errors,
    } = this.props;

    return (
      <div className="col-md-8 pl-0">
        <form>
          <div className="form-group">
            <label htmlFor="repairDescription">Repair Description</label>
            <textarea
              className={this.repairDiscriptionClasses()}
              id="repairDescription"
              rows="3"
              value={repairDiscriptionValue}
              onChange={onRepairDiscriptionChange}
            ></textarea>
            <div className="invalid-feedback">
              {errors.repairDiscriptionValue}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="time">Enter Time for Repair</label>
            <input
              className={this.repairTimeClasses()}
              id="time"
              value={repairTimeValue}
              onChange={onRepairTimeChange}
              placeholder="01:00"
            />
            <div className="invalid-feedback">{errors.repairTimeValue}</div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Add Repair
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NonStandardRepair;
