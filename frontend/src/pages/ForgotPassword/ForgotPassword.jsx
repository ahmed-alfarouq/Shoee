import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ForgotPasswordForm from "./sections/ForgotPasswordForm";

import { forgotPassword } from "../../app/features/auth/authAPI";
import { clearAll } from "../../app/features/main/mainSlice";


const ForgotPassword = () => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const error = useSelector((state) => state.main.authError);
  const message = useSelector((state) => state.main.message);

  const dispatch = useDispatch();

  const submit = async ({ email }) => dispatch(forgotPassword(email));

  useLayoutEffect(() => {
    if (isAuthenticated) {
      if (error.length || message.length) {
        dispatch(clearAll());
      }
      navigate("/", { replace: true });
    }
  });

  return (
    <main className="forgot_password">
      <section className="container">
        <h1 className="title">Forgot password</h1>
        <p className="description">{message}</p>
        <ForgotPasswordForm
          submit={submit}
          formError={error}
          disabled={message.length > 0}
        />
      </section>
    </main>
  );
};

export default ForgotPassword;
