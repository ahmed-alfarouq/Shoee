import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { resetErrorAndMessage } from "../../app/features/auth/authSlice";
import { setUser } from "../../app/features/user/userSlice";

// Utils
import { login } from "../../utils/api";

// Components
import LoginForm from "./sections/LoginForm";
import Spinner from "../../features/Spinner";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { message } = location.state || {};
  const dispatch = useDispatch();

  const error = useSelector((state) => state.auth.error);
  const verified = useSelector((state) => state.user.verified);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const submit = async (values) => {
    const res = await dispatch(login(values)).unwrap();
    dispatch(setUser(res.user));
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    if (error.length) {
      dispatch(resetErrorAndMessage());
    }

    if (verified) {
      navigate(message?.length ? "/checkout" : "/");
    } else {
      navigate("/verify-email");
    }
  }, [isAuthenticated, verified, message, error, dispatch, navigate]);

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
