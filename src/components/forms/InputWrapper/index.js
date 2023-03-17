import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";
import styles from "./InputWrapper.module.scss";

const InputWrapper = (props) => {
  const { name, ...restProps } = props;
  return (
    <label className={styles.label}>
      <span>{name}</span>
      <Field name={name} placeholder={name} {...restProps} />
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
};

InputWrapper.defaultProps = {
  type: "text",
};

InputWrapper.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default InputWrapper;
