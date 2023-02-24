import React, { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.idInterval = null;
    //console.log("constructor");
  }

  tick = () => {
    this.setState((state, props) => {
      const { time } = state;
      const newTime = new Date(time.getTime());
      newTime.setSeconds(newTime.getSeconds() + 1);
      return { time: newTime };
    });
  };

  start = () => {
    if (this.idInterval === null) {
      this.idInterval = setInterval(this.tick, 1000);
    }
  };

  stop = () => {
    clearInterval(this.idInterval);
    this.idInterval = null;
  };

  resume = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };

  componentDidMount() {
    //console.log("componentDidMount");
    //this.start();
  }
  componentDidUpdate() {
    //console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    //clear side effects
    //console.log("componentWillUnmount");
    this.stop();
  }
  render() {
    //console.log("render");
    const { time } = this.state;

    return (
      <article>
        <h2>{time.toLocaleTimeString("en-GB")}</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.resume}>resume</button>
      </article>
    );
  }
}

export default StopWatch;
