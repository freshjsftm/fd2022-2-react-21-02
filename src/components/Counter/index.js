import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";

class Counter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleAdd = () => {
    this.setState((state, props) => ({ count: state.count + props.step }));
  };
  handleSub = () => {
    this.setState((state, props) => ({ count: state.count - props.step }));
  };
  // shouldComponentUpdate(nextProps, nextState){
  //   return nextProps.step === this.props.step;
  // }
  render() {
    const { count } = this.state;
    const styles = {
      width: "50%",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "pink",
      textAlign: "center",
    };
    console.log('render')
    return (
      <section style={styles}>
        <h3>count:{count}</h3>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleSub}>-</button>
        <button onClick={()=>console.log(count)}>click me</button>
      </section>
    );
  }
}

Counter.defaultProps = {
  step: 1,
};

Counter.propTypes = {
  step: PropTypes.number,
};

export default Counter;
