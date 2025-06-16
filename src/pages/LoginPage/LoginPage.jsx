import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { login } from "../../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();
  const submitLogin = (values) => {
    dispatch(login(values));
  };
  return <LoginForm submitLogin={submitLogin} />;
};

export default LoginPage;
