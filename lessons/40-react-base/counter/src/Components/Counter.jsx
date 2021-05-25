import React from "react";
import "./Counter.css";
import plus from "../img/plus.svg";
import minus from "../img/minus.svg";
import refresh from "../img/refresh.svg";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.baseState = this.state;
  }

  increment= () => {
    this.setState({ value: this.state.value + 1 });
  }
  decrement= () => {
    this.setState({ value: this.state.value - 1 });
  }
  reset = () => {
    this.setState(this.baseState);
  }
  render() {
    return (
      <div className="counter-container">
        <div className="counter-value">{this.state.value}</div>
        <div className="buttons-container">
          <button
            className="button plus-button"
            onClick={this.increment}
          >
            <img className="plus-img img" src={plus}></img>
          </button>
          <button
            className="button refresh-button"
            onClick={this.reset}
          >
            <img className="refresh-img img" src={refresh}></img>
          </button>
          <button
            className="button minus-button"
            onClick={this.decrement}
          >
            <img className="minus-img img" src={minus}></img>
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
