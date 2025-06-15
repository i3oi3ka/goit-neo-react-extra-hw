import { Field, Form, Formik } from "formik";

const SignUpForm = ({ submitSignUP }) => {
  const handleSubmit = (values, actions) => {
    actions.reset();
    submitSignUP(values);
  };
  return (
    <Formik onSubmit={handleSubmit}>
      <Form>
        <Field type="text" name="name" />
        <Field type="email" name="email" />
        <Field type="password" name="password" />
      </Form>
    </Formik>
  );
};

export default SignUpForm;
