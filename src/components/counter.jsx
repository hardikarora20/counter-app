import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <div className="alert alert-primary m-4 d-flex justify-content-between align-items-center align-self-stretch">
        {this.props.children}
        <div>
          <span className={this.getClassBadge()}>{this.formatValue()}</span>
          <button onClick={() => this.props.doIncrement(this.props.counterObject)} className="btn btn-secondary">
            +
          </button>
          <button className="btn btn-danger m-2" onClick={() => this.props.doDelete(this.props.counterObject.id)}>Delete</button>
        </div>
      </div>
    );
  }
  formatValue() {
    const { value } = this.props.counterObject;
    return value === 0 ? "Zero" : value;
  }
  getClassBadge() {
    return (
      "badge p-2 m-2 badge-" + (this.props.counterObject.value === 0 ? "warning" : "primary")
    );
  }
}

export default Counter;
