import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resendVerificationEmail, verifyEmail } from "../utils/api";


const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const email = useSelector((state) => state.user.email);
  const verified = useSelector((state) => state.user.verified);

  const error = useSelector((state) => state.auth.authError);
  const message = useSelector((state) => state.main.message);

  const resendEmail = () => {
    dispatch(resendVerificationEmail({ email }));
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

  return (
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
          <button type="button" className="btn" onClick={resendEmail}>
            Resend Email
          </button>
        </div>
      </section>
    </main>
  );
};

export default VerifyEmail;
