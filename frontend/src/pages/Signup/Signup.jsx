import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../app/features/auth/authSlice";

// Components
import Spinner from "../../features/Spinner";
import SignupForm from "./sections/SignupForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => state.auth.error);
  const authrized = useSelector((state) => state.auth.authrized);
  const loading = useSelector((state) => state.auth.loading);

  const submit = (values) => {
    dispatch(signup(values));
    if (error.length) {
      return;
    }
    navigate("/");
  };

  useEffect(() => {
    if (authrized) {
      navigate("/");
    }
  }, [authrized, navigate]);

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
