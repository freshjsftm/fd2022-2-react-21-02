import React from "react";
import cx from "classnames";
import { UserContext, ThemeContext } from "../../contexts";
import styles from "./Header.module.scss";
import CONSTANTS from "../../constants";
const {THEMES} = CONSTANTS;

const Header = () => {
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const headerClasses = cx(styles.header, {
          [styles.light] : theme === THEMES.LIGHT,
          [styles.dark] : theme === THEMES.DARK
        })
        return (
          <UserContext.Consumer>
            {({ firstName }) => (
              <header className={headerClasses}>
                <h1>logo</h1>
                <div>Hi, {firstName}</div>
              </header>
            )}
          </UserContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Header;
