import React, { useLayoutEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ResetPasswordForm from "./sections/ResetPasswordForm";

import { resetPassword } from "../../utils/api";
import { clearAll } from "../../app/features/main/mainSlice";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const error = useSelector((state) => state.main.authError);
  const message = useSelector((state) => state.main.message);

  const dispatch = useDispatch();

  const submit = ({ password }) => {
    const token = searchParams.get("token");
    dispatch(resetPassword({ newPassword: password, token }));
  };

  useLayoutEffect(() => {
    const token = searchParams.get("token");

    if (isAuthenticated || !token) {
      navigate("/", { replace: true });
    }
  });

  return (
    <main className="reset_password">
      <section className="container">
        <h1 className="title">Reset password</h1>
        <p className="message">
          {message && (
            <>
              {message}:{" "}
              <Link to="/login" replace onClick={() => dispatch(clearAll())}>
                Go to login
              </Link>
            </>
          )}
        </p>

        <ResetPasswordForm
          submit={submit}
          formError={error}
          disabled={message?.length}
        />
      </section>
    </main>
  );
};

export default ResetPassword;
