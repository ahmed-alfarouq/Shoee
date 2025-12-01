import { useSearchParams } from "react-router-dom";

import { SignInForm } from "@/features/Auth/SignInForm";
import { AuthWrapper } from "@/features/Auth/AuthWrapper";

const SignIn = () => {
  const [searchParams] = useSearchParams();
  const message = searchParams.get("message");

  return (
    <AuthWrapper title="My account" message={message}>
      <SignInForm />
    </AuthWrapper>
  );
};

export default SignIn;
