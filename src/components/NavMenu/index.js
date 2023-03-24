import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Close } from "@mui/icons-material";
import cx from "classnames";
import { NavMenuContext } from "../../contexts";
import styles from "./NavMenu.module.scss";

const NavMenu = () => {
  const {isMenuOpen, setIsMenuOpen} = useContext(NavMenuContext);
  const handleMenuClose = ()=>{setIsMenuOpen(false)}
  const classNames = cx(styles.container, {
    [styles.open] : isMenuOpen
  });
  return (
    <nav className={classNames}>
      <Close className={styles.close} onClick={handleMenuClose}/>
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
