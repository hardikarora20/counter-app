import React, { Component } from "react";
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <main className="container">
        <Counters/>
        </main>
      </React.Fragment>
    );
  }

  handleDelete = (counterId) =>{
    const newCounters = this.state.counters.filter((currCounter)=>{
      return currCounter.id !== counterId;
    })
    this.setState({counters: newCounters});
  }

  handleReset = () => {
    const resetCounters = this.state.counters.map((c) => {
        c.value = 0;
        return c;
      });
    this.setState({counters: resetCounters});
  }

  handleIncrement = (counter) => {
    //make a new object which copy of counters
    const newCounters = [...this.state.counters];
    //get the index of current id object
    const index = newCounters.indexOf(counter);
    //make a new object which is copy of given object
    newCounters[index] = {...counter};
    //increment value of curr object
    newCounters[index].value++;
    //update state
    this.setState({counters: newCounters});
  }
}

export default App;
