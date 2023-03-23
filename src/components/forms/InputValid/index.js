import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, useField } from "formik";
import cx from "classnames";
import styles from "./InputValid.module.scss";

const InputValid = (props) => {
  const { name, ...restProps } = props;
  const [field, meta] = useField(name);
  const classNames = cx({
    [styles.invalid]: meta.error && meta.touched,
  });
  return (
    <label className={styles.label}>
      <span>{name}</span>
      <input className={classNames} {...field} {...restProps} />
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
};

InputValid.defaultProps = {
  type: "text",
};

InputValid.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default InputValid;
