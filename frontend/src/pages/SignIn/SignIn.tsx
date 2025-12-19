import { useSearchParams } from "react-router-dom";

import { SignInForm } from "@/features/Auth/SignInForm";
import { AuthWrapper } from "@/features/Auth/AuthWrapper";

const bottomLinks = [
  { url: "/sign-up", text: "Create an account" },
  { url: "/forgot-password", text: "Forgot password?" },
];

const SignIn = () => {
  const [searchParams] = useSearchParams();
  const message = searchParams.get("message");

  return (
    <AuthWrapper
      title="My account"
      formTitle="Sign In"
      message={message}
      bottomLinks={bottomLinks}
    >
      <SignInForm />
    </AuthWrapper>
  );
};

export default SignIn;
