import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { clearAll } from "app/features/main/mainSlice";
import { setUser } from "app/features/user/userSlice";
import { login } from "app/features/auth/authAPI";

// Components
import LoginForm from "../../components/features/auth/LoginForm";

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { message } = location.state || {};
  const dispatch = useDispatch();

  const error = useSelector((state) => state.main.authError);

  const verified = useSelector((state) => state.user.verified);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const submit = async (values) => {
    const res = await dispatch(login(values)).unwrap();
    dispatch(setUser(res.user));
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    if (error.length) {
      dispatch(clearAll());
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
        <h1 className="title">My account</h1>
        <p className="message">{message}</p>
        <LoginForm submit={submit} formError={error} />
      </section>
    </main>
  );
};

export default SignIn;
