import { Field, Form, Formik } from "formik";

const LoginForm = ({ submitLogin }) => {
  const handleSubmit = (values, actions) => {
    actions.reset();
    submitLogin(values);
  };
  return (
    <Formik onSubmit={handleSubmit}>
      <Form>
        <Field type="email" name="email" />
        <Field type="password" name="password" />
      </Form>
    </Formik>
  );
};

export default LoginForm;
