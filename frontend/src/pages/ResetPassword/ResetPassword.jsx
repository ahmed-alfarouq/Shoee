import React, { useLayoutEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ResetPasswordForm from "./sections/ResetPasswordForm";
import Spinner from "../../features/Spinner";

import { resetPassword } from "../../utils/api";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const loading = useSelector((state) => state.auth.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const message = useSelector((state) => state.auth.message);
  const error = useSelector((state) => state.auth.error);

  const dispatch = useDispatch();

  const submit = async ({ password }) => {
    await dispatch(
      resetPassword({ newPassword: password, token: searchParams.get("token") })
    ).unwrap();
    if (error.length) {
      return;
    }
    navigate("/login", { replace: true });
  };

  useLayoutEffect(() => {
    const token = searchParams.get("token");

    if (isAuthenticated || !token) {
      navigate("/", { replace: true });
    }
  });

  return loading ? (
    <Spinner />
  ) : (
    <main className="reset_password">
      <section className="container">
        <h1 className="title">Reset password</h1>
        <p className="description">{message}</p>
        <ResetPasswordForm submit={submit} formError={error} />
      </section>
    </main>
  );
};

export default ResetPassword;
