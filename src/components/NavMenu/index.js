import React, { useContext, useRef, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Close } from "@mui/icons-material";
import cx from "classnames";
import { NavMenuContext } from "../../contexts";
import styles from "./NavMenu.module.scss";

const NavMenu = () => {
  const navRef = useRef(null);
  const { isMenuOpen, setIsMenuOpen } = useContext(NavMenuContext);
  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, [setIsMenuOpen]);
  const classNames = cx(styles.container, {
    [styles.open]: isMenuOpen,
  });
  useEffect(() => {
    const handleClick = ({ target }) => {
      console.log(navRef.current.contains(target));
      if (isMenuOpen && navRef.current.contains(target) === false) {
        handleMenuClose();
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isMenuOpen, handleMenuClose]);
  return (
    <nav className={classNames} ref={navRef}>
      <Close className={styles.close} onClick={handleMenuClose} />
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
