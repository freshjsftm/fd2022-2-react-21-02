import React from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import Ciao from "./components/CiaoSection/Ciao";

const App = (props) => {
  return (
    <>
      <Calendar />
      <Ciao classStyle="welcome" name="Brad" id={1}/>
    </>
  );
};

export default App;
