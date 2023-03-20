import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { UserContext } from "./contexts";
import Header from "./components/Header";

const App = () => {
  const [user] = useState({
    id: 4,
    firstName: "Brad",
    lastName: "Pitt",
  });
  //state for theme
  return (
    //wrapping provider theme
    <UserContext.Provider value={user}>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
