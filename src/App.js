import React, { Component } from "react";
import "./App.css";
import Ciao from './components/Ciao';
const user = {
  firstName:'Brad'
}
class App extends Component {
  render() {
    return (
      <>
        <h1 className="heading" title="123456">
          Hi, React! {Math.random()}
        </h1>
        <Ciao classStyle="welcome" name={user.firstName} />
        <Ciao classStyle="heading" name="Tom" isHi/>
        <Ciao classStyle="welcome" name="Fred" isHi/>
        <Ciao classStyle="heading" />
      </>
    );
  }
}

export default App;
