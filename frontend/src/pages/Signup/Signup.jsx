import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetErrorAndMessage } from "../../app/features/auth/authSlice";
import { signup } from "../../utils/api";

// Components
import Spinner from "../../features/Spinner";
import SignupForm from "./sections/SignupForm";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => state.auth.error);
  const verified = useSelector((state) => state.auth.verified);
  const authrized = useSelector((state) => state.auth.authrized);
  const loading = useSelector((state) => state.auth.loading);

  const submit = (values) => dispatch(signup(values));

  useEffect(() => {
    if (!authrized) return;

    if (error.length) {
      dispatch(resetErrorAndMessage());
    }

    navigate(verified ? "/" : "/verify-email");
  }, [authrized, verified, error, dispatch, navigate]);

  return (
    <main className="sign_up">
      <section className="container">
        {loading && <Spinner />}
        <h1 className="title">Join our family</h1>
        <SignupForm submit={submit} formError={error} />
      </section>
    </main>
  );
};

export default Signup;
