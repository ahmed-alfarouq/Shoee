import { SignUpForm } from "@/features/Auth/SignUpForm";
import { AuthWrapper } from "@/features/Auth/AuthWrapper";

const bottomLinks = [
  { url: "/sign-in", text: "Already have an account? Sign In" },
];

const SignUp = () => {
  return (
    <AuthWrapper title="Join our family" formTitle="Sign Up" bottomLinks={bottomLinks}>
      <SignUpForm />
    </AuthWrapper>
  );
};

export default SignUp;
