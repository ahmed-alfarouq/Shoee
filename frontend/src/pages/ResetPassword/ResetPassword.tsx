import { Link, useSearchParams } from "react-router-dom";

import ResetPasswordForm from "@/features/Auth/ResetPasswordForm/ResetPasswordForm";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const message = searchParams.get("message");

  return (
    <section className="auth">
      <div className="container">
        <h1 className="title">Reset password</h1>
        {message && (
          <p className="message">
            ({message}:{" "}
            <Link to="/login" replace>
              Go to login
            </Link>
            )
          </p>
        )}

        <ResetPasswordForm />
      </div>
    </section>
  );
};

export default ResetPassword;
