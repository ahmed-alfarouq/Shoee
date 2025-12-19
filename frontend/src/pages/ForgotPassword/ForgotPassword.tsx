import { AuthWrapper } from "@/features/Auth/AuthWrapper";
import { ForgotPasswordForm } from "@features/Auth/ForgotPasswordForm";

const bottomLinks = [
  { url: "/sign-in", text: "Back to Sign In" },
];

const ForgotPassword = () => {
  return (
    <AuthWrapper title="Forgot Password" bottomLinks={bottomLinks}>
      <ForgotPasswordForm />
    </AuthWrapper>
  );
};

export default ForgotPassword;
