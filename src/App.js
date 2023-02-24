import React, { Component } from "react";
import "./App.css";
import StopWatch from "./components/StopWatch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible:true
    }
  }
  
  render() {
    const {isVisible} = this.state;
    return (
      <>
        <button onClick={()=>{this.setState({isVisible:!isVisible})}}>switch</button>
        {isVisible && <StopWatch />}
      </>
    );
  }
}

export default App;
