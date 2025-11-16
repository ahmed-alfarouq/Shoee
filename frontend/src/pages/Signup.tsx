import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signup } from "../../app/features/auth/authAPI";

import { setUser } from "../../app/features/user/userSlice";

// Components
import SignupForm from "../../components/features/auth/SignupForm";
import { clearAll } from "../../app/features/main/mainSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => state.main.authError);
  const verified = useSelector((state) => state.user.verified);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const submit = async (values) => {
    const res = await dispatch(signup(values)).unwrap();
    dispatch(setUser(res.user));
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(clearAll());
    navigate(verified ? "/" : "/verify-email");
  }, [isAuthenticated, verified, dispatch, navigate]);

  return (
    <main className="sign_up">
      <section className="container">
        <h1 className="title">Join our family</h1>
        <SignupForm submit={submit} formError={error} />
      </section>
    </main>
  );
};

export default Signup;
