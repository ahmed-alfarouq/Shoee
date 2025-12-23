import { useUserActions } from "@/stores/user";
import { useState, useTransition } from "react";

import useUser from "@/query/user/useUser";

import type { FormMessageProps } from "@/features/Auth/FormMessage/FormMessage.types";

export const useAvatarUpdate = () => {
  const [isPending, startTransition] = useTransition();
  const { updateAvatar } = useUserActions();

  const { data: user, isLoading } = useUser();

  const [preview, setPreview] = useState<string | null | undefined>(
    user?.avatar
  );
  const [message, setMessage] = useState<{
    type: FormMessageProps["type"];
    message: string;
  }>({ type: "error", message: "" });

  const upload = (files: FileList) => {
    const file = files[0];
    if (!file) return;

    startTransition(async () => {
      const [err, data] = await updateAvatar(file);

      if (err) {
        setMessage({ type: "error", message: err.message });
        return;
      }

      setMessage({
        type: "success",
        message: data?.msg || "Avatar updated successfully.",
      });

      setPreview(URL.createObjectURL(file));
    });
  };

  return { isPending, isLoading, preview, message, upload };
};
