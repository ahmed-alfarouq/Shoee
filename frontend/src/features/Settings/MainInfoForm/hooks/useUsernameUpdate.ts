import { useState, useTransition } from "react";
import { useUser, useUserActions } from "@/stores/user";
import type { FormMessageProps } from "@/features/Auth/FormMessage/FormMessage.types";

export const useUsernameUpdate = () => {
  const [isPending, startTransition] = useTransition();

  const user = useUser();
  const { updateUsername } = useUserActions();

  const [message, setMessage] = useState<{
    type: FormMessageProps["type"];
    message: string;
  }>({ type: "error", message: "" });

  const update = (username: string) => {
    startTransition(async () => {
      if (username === user?.username) {
        setMessage({
          type: "error",
          message: "Username must be different from the current one.",
        });
        return;
      }

      const [err, data] = await updateUsername(username);
      if (err) {
        setMessage({ type: "error", message: err.message });
        return;
      }

      setMessage({ type: "success", message: data?.msg || "" });
    });
  };

  return { username: user?.username, message, update, isPending };
};
