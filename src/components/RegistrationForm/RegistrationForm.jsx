import { nanoid } from "@reduxjs/toolkit";
import { Field, Form, Formik } from "formik";

const RegistrationForm = ({ submitSignUP }) => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const nameId = nanoid();
  const emailId = nanoid();
  const passId = nanoid();

  const handleSubmit = (values, actions) => {
    actions.reset;
    console.log(values);
    submitSignUP(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameId}>Name:</label>
        <Field id={nameId} type="text" name="name" />
        <label htmlFor={emailId}>Email:</label>
        <Field id={emailId} type="email" name="email" />
        <label htmlFor={passId}>Password:</label>
        <Field id={passId} type="password" name="password" />
        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
