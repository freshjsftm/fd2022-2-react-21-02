import React, { useContext, useState, useEffect, useCallback } from "react";
import { ThemeContext } from "../contexts";
import Calendar from "../components/Calendar";
import UserProfile from "../components/UserProfile";
import CONSTANTS from "../constants";
const { THEMES } = CONSTANTS;

const HomePage = (props) => {
  //console.log("render");
  const [sense, setSense] = useState(1);
  const [theme, setTheme] = useContext(ThemeContext);
  const isLight = theme === THEMES.LIGHT;
  const inlineStyle = {
    color: isLight ? "#222" : "#ccc",
    backgroundColor: isLight ? "#ccc" : "#222",
  };
  const handleTheme = useCallback(() => {
    setTheme(isLight ? THEMES.DARK : THEMES.LIGHT);
  }, [isLight, setTheme]);
  const handleValue = useCallback(({ target: { value } }) => {
    setSense(Number(value));
  }, [setSense]);
  const handleBtnLog = useCallback(() => {
    console.log(sense);
  }, [sense]);
  useEffect(()=>{
    console.log('created function handleValue')
  }, [handleValue])
  return (
    <section style={inlineStyle}>
      <button onClick={handleTheme}>{isLight ? "dark" : "light"}</button>
      <Calendar />
      <UserProfile />
      <input type="number" value={sense} onChange={handleValue} />
      <button onClick={handleBtnLog}>log sense</button>
    </section>
  );
};

export default HomePage;
