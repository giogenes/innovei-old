import React, { Component } from "react";

class UnitTimelineForm extends Component {
  textAreaClasses() {
    if (!this.props.errors.timelineInputValue) return "form-control";
    return "form-control is-invalid";
  }

  submitButtonClasses() {
    if (!this.props.errors.timelineInputValue)
      return "btn-sm mb-3 btn btn-primary";
    return "btn-sm mb-3 btn btn-primary disabled";
  }
  render() {
    const { onSubmit, timelineInputValue, onChange, errors } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <textarea
            placeholder="Add a note..."
            className={this.textAreaClasses()}
            id="timelineTextarea"
            rows="3"
            value={timelineInputValue}
            onChange={onChange}
          />
          <div className="invalid-feedback">{errors.timelineInputValue}</div>
        </div>
        <button
          type="submit"
          className={this.submitButtonClasses()}
          value="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default UnitTimelineForm;
