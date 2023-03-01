import React from "react";
import "./App.css";
import Ciao from "./components/CiaoSection/Ciao";

const App = (props) => {
  const user = {
    id:1,
    firstName:'Brad',
    lastName: 'Pitt'
  }
  return (
    <>
      <Ciao classStyle={'welcome'} name={user.firstName} id={user.id}/>
    </>
  );
};

export default App;
