import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetErrorAndMessage } from "../../app/features/auth/authSlice";
import { setUser } from "../../app/features/user/userSlice";

// Utils
import { signup } from "../../utils/api";

// Components
import Spinner from "../../features/Spinner";
import SignupForm from "./sections/SignupForm";


const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => state.auth.error);
  const verified = useSelector((state) => state.user.verified);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const submit = async (values) => {
    const res = await dispatch(signup(values)).unwrap();
    dispatch(setUser(res.user));
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    if (error.length) {
      dispatch(resetErrorAndMessage());
    }

    navigate(verified ? "/" : "/verify-email");
  }, [isAuthenticated, verified, error, dispatch, navigate]);

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
