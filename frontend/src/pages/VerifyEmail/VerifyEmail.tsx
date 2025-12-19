import { useUserActions } from "@/stores/user";
import { useEffect, useEffectEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Spinner } from "@/shared/Spinner";
import { AuthWrapper } from "@/features/Auth/AuthWrapper";
import { FormMessage } from "@/features/Auth/FormMessage";

import type { FormMessageProps } from "@/features/Auth/FormMessage/FormMessage.types";

const VerifyEmail = () => {
  const [message, setMessage] = useState<{
    type: FormMessageProps["type"];
    text: string;
  }>({
    type: "info",
    text: "We are verifing your email, please don't close the tab",
  });

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const { verifyEmail } = useUserActions();

  const verifyEmailEvent = useEffectEvent(async (token: string) => {
    const [err, data] = await verifyEmail(token);

    if (err) {
      setMessage({ type: "error", text: err.message });
      return;
    }

    setMessage({
      type: "success",
      text: data?.msg || "Your email has been verified successfully",
    });
  });

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
      return;
    }

    verifyEmailEvent(token);
  }, [navigate, token]);

  return (
    <AuthWrapper title="Verify Email">
      {message.type === "success" || message.type === "error" ? null : (
        <Spinner />
      )}
      <FormMessage type={message.type} message={message.text} />
    </AuthWrapper>
  );
};

export default VerifyEmail;
