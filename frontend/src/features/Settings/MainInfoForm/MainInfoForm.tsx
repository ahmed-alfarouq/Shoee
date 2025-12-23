import { Form, Formik } from "formik";

import styles from "./MainInfoForm.module.scss";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { AvatarPreview } from "@/features/AvatarPreview";
import { FormMessage } from "@/features/Auth/FormMessage";
import { UploadFilesButton } from "@/components/UploadFilesButton";

import { userInfoSchema, type UserInfoSchema } from "@/schema/userInfo";

import { useAvatarUpdate } from "./hooks/useAvatarUpdate";
import { useUsernameUpdate } from "./hooks/useUsernameUpdate";

const MainInfoForm = () => {
  const {
    preview,
    upload: uploadAvatar,
    message: avatarMessage,
    isPending: isAvatarPending,
  } = useAvatarUpdate();

  const {
    username,
    update: updateUsername,
    message: usernameMessage,
    isPending: isUsernamePending,
  } = useUsernameUpdate();

  const onSubmit = async ({ username }: UserInfoSchema) => {
    updateUsername(username);
  };

  return (
    <>
      <AvatarPreview preview={preview} />

      <div className={styles.form}>
        <UploadFilesButton
          multiple={false}
          accept="image/*"
          label="Upload Avatar"
          onUpload={uploadAvatar}
          disabled={isAvatarPending}
          isUploading={isAvatarPending}
        />

        <FormMessage {...avatarMessage} />
      </div>

      <Formik
        onSubmit={onSubmit}
        validationSchema={userInfoSchema}
        initialValues={{ username: username ?? "" }}
      >
        <Form className={styles.form}>
          <Input label="Username" name="username" />

          <FormMessage {...usernameMessage} />

          <Button type="submit" disabled={isUsernamePending}>
            Save Changes
          </Button>
        </Form>
      </Formik>
    </>
  );
};
export default MainInfoForm;
