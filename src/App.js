import React, { Component } from "react";
import "./App.css";
import Ciao from "./components/Ciao";
import HeadingH1 from "./components/HeadingH1";

class App extends Component {
  render() {
    return (
      <>
        <HeadingH1 className="heading" title="qwe" content="Hi, React!"/>
        <Ciao classStyle="welcome" name="Brad" />
        <Ciao classStyle="heading" name="Tom" />
        <Ciao classStyle="welcome" name="Fred" />
        <Ciao classStyle="heading" />
      </>
    );
  }
}

export default App;
