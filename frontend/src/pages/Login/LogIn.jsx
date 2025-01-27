import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../app/features/auth/authSlice";

// Components
import LoginForm from "./sections/LoginForm";
import Spinner from "../../features/Spinner";
import { useEffect } from "react";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { message } = location.state || {};
  const dispatch = useDispatch();

  const error = useSelector((state) => state.auth.error);
  const authrized = useSelector((state) => state.auth.authrized);
  const loading = useSelector((state) => state.auth.loading);

  const submit = (values) => {
    dispatch(login(values));
  };

  useEffect(() => {
    if (authrized) {
      if (message && message.length) {
        return navigate("/checkout");
      }
      navigate("/");
    }
  }, [authrized, message, navigate]);

  return (
    <main className="log_in">
      <section className="container">
        {loading && <Spinner />}
        <h1 className="title">My account</h1>
        <p className="message">{message}</p>
        <LoginForm submit={submit} formError={error} />
      </section>
    </main>
  );
};

export default SignIn;
