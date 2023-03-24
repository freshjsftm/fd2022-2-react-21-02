import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { UserContext, ThemeContext } from "./contexts";
import CONSTANTS from "./constants";
import { useClicker } from "./hooks";
import SignUpForm from "./components/forms/SignUpForm";
import Chat from "./components/Chat";
const { THEMES } = CONSTANTS;

const App = () => {
  const [user] = useState({
    id: 4,
    firstName: "Brad",
    lastName: "Pitt",
  });
  const [theme, setTheme] = useState(THEMES.LIGHT);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <UserContext.Provider value={user}>
        <p>clicker count = {useClicker()}</p>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <NavLink to="/">home</NavLink>
              </li>
              <li>
                <NavLink to="/signup">signup</NavLink>
              </li>
              <li>
                <NavLink to="/chat">chat</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
