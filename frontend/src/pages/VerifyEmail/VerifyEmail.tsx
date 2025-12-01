import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Toast } from "@/components/Toast";
import { Button } from "@/components/Button";
import { AuthWrapper } from "@/features/Auth/AuthWrapper";

import type { AlertVariant } from "@/components/Toast/Toast.types";

const VerifyEmail = () => {
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: AlertVariant }>({
    text: "",
    type: "success",
  });

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const resendEmail = () => {
    setMessage({
      text: "Your email has been sent successfully.",
      type: "success",
    });
    setDisabled(true);
  };

  useEffect(() => {
    const token = searchParams.get("token");
    const email = searchParams.get("email");
    if (!token || !email) navigate("/");
  }, [searchParams, navigate]);

  return (
    <AuthWrapper
      title="Verify Email"
      message="We've sent you an email. Please verify your email address to continue. If you didn't receive it, click the 'Resend Email' button"
    >
      <Button
        className="mx-auto my-4"
        onClick={resendEmail}
        disabled={disabled}
      >
        Resend Email
      </Button>
      <Toast message={message.text} variant={message.type} />
    </AuthWrapper>
  );
};

export default VerifyEmail;
