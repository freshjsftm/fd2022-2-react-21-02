import React from "react";
import PropTypes from "prop-types";
import styles from "./Container.module.scss";

const Container = (props) => {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Container;
