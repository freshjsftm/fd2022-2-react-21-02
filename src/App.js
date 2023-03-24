import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuOpen } from "@mui/icons-material";
import HomePage from "./pages/HomePage";
import { UserContext, ThemeContext, NavMenuContext } from "./contexts";
import CONSTANTS from "./constants";
import SignUpForm from "./components/forms/SignUpForm";
import Chat from "./components/Chat";
import LoaderPage from "./pages/LoaderPage";
import NavMenu from "./components/NavMenu";
const { THEMES } = CONSTANTS;
const App = () => {
  const [user] = useState({
    id: 4,
    firstName: "Brad",
    lastName: "Pitt",
  });
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = (event) => {
    event.stopPropagation();
    setIsMenuOpen(true);
  };
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      setIsMenuOpen(true);
    }
  };
  return (
    <NavMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <UserContext.Provider value={user}>
          <BrowserRouter>
            <MenuOpen
              onClick={handleMenuOpen}
              tabIndex="0"
              onKeyDown={handleEnter}
            />
            <NavMenu />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/load" element={<LoaderPage />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </NavMenuContext.Provider>
  );
};

export default App;
