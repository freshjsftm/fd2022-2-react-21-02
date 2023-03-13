import React from "react";
import cx from "classnames";
import {WbSunny, DarkMode} from '@mui/icons-material';
import { UserContext, ThemeContext } from "../../contexts";
import styles from "./Header.module.scss";
import CONSTANTS from "../../constants";
const { THEMES } = CONSTANTS;

const Header = () => {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => {
        const headerClasses = cx(styles.header, {
          [styles.light]: theme === THEMES.LIGHT,
          [styles.dark]: theme === THEMES.DARK,
        });
        const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        return (
          <UserContext.Consumer>
            {({ firstName }) => (
              <header className={headerClasses}>
                <h1>logo</h1>
                <div>Hi, {firstName}</div>
                <span
                  onClick={() => {
                    setTheme(newTheme);
                  }}
                >
                  {theme === THEMES.LIGHT ? <DarkMode /> : <WbSunny />}
                </span>
              </header>
            )}
          </UserContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Header;
