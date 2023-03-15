import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SIGN_IN_SCHEMA } from "./../../../utils/validationSchemas";
import styles from "./LogInForm.module.scss";

const initialValues = {
  email: "",
  password: "", //gr3at@3wdsG
};
const LogInForm = (props) => {
  const onSubmit = (values, formikBag) => {
    console.log("values", values);
    console.log("formikBag", formikBag);
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SIGN_IN_SCHEMA} >
      {(formikProps) => {
        console.log(formikProps);
        return (
          <Form className={styles.form}>
            <Field type="email" name="email" placeholder="email" />
            <ErrorMessage name="email" component="div" className={styles.error} />
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="div" className={styles.error} />
            <input type="submit" value="Send" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LogInForm;
