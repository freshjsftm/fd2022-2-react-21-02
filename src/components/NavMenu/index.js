import React, { useContext, useEffect, useCallback, useId } from "react";
import { NavLink } from "react-router-dom";
import { Close } from "@mui/icons-material";
import cx from "classnames";
import { NavMenuContext } from "../../contexts";
import styles from "./NavMenu.module.scss";

const NavMenu = () => {
  const navMenu = useId();
  console.log(navMenu)
  const { isMenuOpen, setIsMenuOpen } = useContext(NavMenuContext);
  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, [setIsMenuOpen]);
  const classNames = cx(styles.container, {
    [styles.open]: isMenuOpen,
  });
  useEffect(() => {
    const handleClick = ({ target }) => {
      if (isMenuOpen && document.getElementById(navMenu).contains(target) === false) {
        handleMenuClose();
      }
    };
    const handleKeyDown = (event) => {
      if (event.key !== "Enter" && event.key !== "Tab") {
        handleMenuClose();
      }
    };
    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
    }; // eslint-disable-next-line
  }, [isMenuOpen, handleMenuClose]);
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={classNames} id={navMenu}>
      <Close
        className={styles.close}
        onClick={handleMenuClose}
        tabIndex="0"
        onKeyDown={handleEnter}
      />
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/load">load data</NavLink>
        </li>
        <li>
          <NavLink to="/signup">signup</NavLink>
        </li>
        <li>
          <NavLink to="/chat">chat</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
