import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters : [
        {id : 1, value : 5},
        {id : 2, value : 1},
        {id : 3, value : 8},
        {id : 4, value : 2},
    ]
  };

  render() {
    return (
      <div className="alert alert-primary m-4 d-flex-col justify-content-between align-items-center align-self-stretch">
        <div className="btn btn-warning m-4 p-4-2" onClick={this.handleReset}>Reset</div>
        {this.state.counters.map((currCounter) => 
            <Counter key = {currCounter.id} counterObject = {currCounter} doDelete = {this.handleDelete} doIncrement = {this.handleIncrement}>
                <div>Untitled</div>
            </Counter>)}
      </div>
    );
  }
}

export default Counters;
