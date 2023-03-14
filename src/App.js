import React from "react";
import "./App.css";
import { SIGN_UP_SCHEMA } from "./utils/validationSchemas";

const App = () => {
  const user = {
    firstName: "Brad",
    lastName: "Pitt",
    email: "pitt@gmail.com",
    password: "gr3at@3wdsG",
    age: 59,
    isMale: true,
  };
  console.log(SIGN_UP_SCHEMA.validate(user));
  return null;
};

export default App;
