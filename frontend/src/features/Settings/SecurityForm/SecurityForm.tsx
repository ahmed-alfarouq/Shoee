import { useState, useTransition } from "react";
import { Formik, Form, type FormikHelpers } from "formik";

import styles from "./SecurityForm.module.scss";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { FormMessage } from "@/features/Auth/FormMessage";

import { useUserActions } from "@/stores/user";

import { updatePasswordSchema, type UpdatePasswordSchema } from "@/schema/auth";

import type { FormMessageProps } from "@/features/Auth/FormMessage/FormMessage.types";

const initialValues = { oldPassword: "", newPassword: "", confirmPassword: "" };

const SecurityForm = () => {
  const [isPending, startTransition] = useTransition();

  const [message, setMessage] = useState<{
    type: FormMessageProps["type"];
    message: string;
  }>({ type: "error", message: "" });

  const { updatePassword } = useUserActions();

  const submit = (
    { oldPassword, newPassword }: UpdatePasswordSchema,
    { resetForm }: FormikHelpers<UpdatePasswordSchema>
  ) => {
    startTransition(async () => {
      const [err, data] = await updatePassword(oldPassword, newPassword);

      if (err) {
        setMessage({ type: "error", message: err.message });
        return;
      }
      setMessage({
        type: "success",
        message: data?.msg || "Password has been updated successfully.",
      });
      resetForm();
    });
  };

  return (
    <Formik
      onSubmit={submit}
      initialValues={initialValues}
      validationSchema={updatePasswordSchema}
    >
      <Form className={styles.form}>
        <Input
          placeholder=" "
          type="password"
          name="oldPassword"
          label="Old Password"
          disabled={isPending}
        />
        <Input
          placeholder=" "
          type="password"
          name="newPassword"
          label="New Password"
          disabled={isPending}
        />
        <Input
          placeholder=" "
          type="password"
          name="confirmPassword"
          label="Confirm New Password"
          disabled={isPending}
        />

        <FormMessage type={message.type} message={message.message} />

        <Button type="submit" className="mt-3" disabled={isPending}>
          Update Password
        </Button>
      </Form>
    </Formik>
  );
};

export default SecurityForm;
