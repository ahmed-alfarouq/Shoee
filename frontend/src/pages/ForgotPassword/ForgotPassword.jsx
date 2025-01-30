import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetErrorAndMessage } from "../../app/features/auth/authSlice";

import ForgotPasswordForm from "./sections/ForgotPasswordForm";
import Spinner from "../../features/Spinner";

import { forgotPassword } from "../../utils/api";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const message = useSelector((state) => state.auth.message);

  const dispatch = useDispatch();

  const submit = async ({ email }) => dispatch(forgotPassword(email));

  useLayoutEffect(() => {
    if (isAuthenticated) {
      if (error.length || message.length) {
        dispatch(resetErrorAndMessage());
      }
      navigate("/", { replace: true });
    }
  });

  return loading ? (
    <Spinner />
  ) : (
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
