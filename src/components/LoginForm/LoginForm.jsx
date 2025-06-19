import { nanoid } from "@reduxjs/toolkit";
import { Field, Form, Formik } from "formik";

const LoginForm = ({ submitLogin }) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const emailId = nanoid();
  const passId = nanoid();
  const handleSubmit = (values, actions) => {
    actions.reset;
    submitLogin(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={emailId}>Email:</label>
        <Field
          id={emailId}
          type="email"
          name="email"
          autoComplete="current-email"
        />
        <label htmlFor={emailId}>Password</label>
        <Field
          id={passId}
          type="password"
          name="password"
          autoComplete="current-password"
        />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
