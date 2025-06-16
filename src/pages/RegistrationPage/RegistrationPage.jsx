import { Field, Form, Formik } from "formik";
import SignUpForm from "../../components/RegistrationForm/RegistrationForm";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const submitSignUP = (values) => {
    console.log(values);
    dispatch(register(values));
  };
  return (
    <>
      <h2>Registration Form</h2>
      <SignUpForm submitSignUP={submitSignUP} />
    </>
  );
};

export default RegistrationPage;
