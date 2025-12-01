import { SignUpForm } from "@/features/Auth/SignUpForm";
import { AuthWrapper } from "@/features/Auth/AuthWrapper";

const SignUp = () => {
  return (
    <AuthWrapper title="Join our family">
      <SignUpForm />
    </AuthWrapper>
  );
};

export default SignUp;
