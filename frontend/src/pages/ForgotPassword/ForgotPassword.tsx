import { AuthWrapper } from "@/features/Auth/AuthWrapper";
import { ForgotPasswordForm } from "@features/Auth/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <AuthWrapper title="Forgot Password">
      <ForgotPasswordForm />
    </AuthWrapper>
  );
};

export default ForgotPassword;
