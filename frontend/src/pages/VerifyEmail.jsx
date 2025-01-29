import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  resendVerificationEmail,
  verifyEmail,
} from "../utils/api";

import Spinner from "../features/Spinner";

const VerifyEmail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const verified = useSelector((state) => state.auth.verified);
  const error = useSelector((state) => state.auth.error);
  const message = useSelector((state) => state.auth.message);
  const loading = useSelector((state) => state.auth.loading);

  const resendEmail = () => {
    dispatch(resendVerificationEmail({ email: user.email }));
  };

  useEffect(() => {
    if (verified || verified === null) {
      navigate("/");
    }

    const token = searchParams.get("token");
    if (token) {
      dispatch(verifyEmail(token));
    }
  }, [searchParams, dispatch, navigate, verified]);

  return loading ? (
    <Spinner />
  ) : (
    <main className="verify-email">
      <section className="container">
        <h1 className="title">Verify Email</h1>
        <p className="description">
          We've sent you an email. Please verify your email address to continue.
          If you didn't receive the email, please click on "Resend Email".
        </p>
        <p className="message">{message}</p>
        <p className="error">{error}</p>
        <div className="btns">
          <button
            type="button"
            className="btn"
            onClick={resendEmail}
          >
            Resend Email
          </button>
        </div>
      </section>
    </main>
  );
};

export default VerifyEmail;
