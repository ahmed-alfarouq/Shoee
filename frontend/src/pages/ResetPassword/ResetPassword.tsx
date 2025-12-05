import { AuthWrapper } from "@/features/Auth/AuthWrapper";
import { ResetPasswordForm } from "@/features/Auth/ResetPasswordForm";

const bottomLinks = [{ url: "/sign-in", text: "Back to Sign In" }];

const ResetPassword = () => {
  return (
    <AuthWrapper title="Reset password" bottomLinks={bottomLinks}>
      <ResetPasswordForm />
    </AuthWrapper>
  );
};

export default ResetPassword;
