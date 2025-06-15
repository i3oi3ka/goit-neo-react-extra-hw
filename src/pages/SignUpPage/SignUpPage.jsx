import { Field, Form, Formik } from "formik";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { signUpThunk } from "../../redux/auth/operations";

const SignUpPage = () => {
  const submitSignUP = (values) => {
    signUpThunk(values);
  };
  return <SignUpForm submitSignUP={submitSignUP} />;
};

export default SignUpPage;
