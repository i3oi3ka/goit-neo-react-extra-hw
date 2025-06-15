import LoginForm from "../../components/LoginForm/LoginForm";
import { loginThunk } from "../../redux/auth/operations";

const LoginPage = () => {
  const submitLogin = (values) => {
    loginThunk(values);
  };
  return <LoginForm submitLogin={submitLogin} />;
};

export default LoginPage;
