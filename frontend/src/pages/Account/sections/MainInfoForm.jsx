import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Yup from "yup";
import { Formik, Form } from "formik";

import FormInput from "components/FormInput";
import FloatingAlert from "components/FloatingAlert";

import { clearAll } from "app/features/main/mainSlice";
import { updateAvatar, updateUsername } from "app/features/user/userAPI";

const MainInfoForm = () => {
  const avatar = useSelector((state) => state.user.avatar);

  const dispatch = useDispatch();

  const username = useSelector((state) => state.user.username);

  const error = useSelector((state) => state.main.authError);
  const message = useSelector((state) => state.main.message);

  const initialValues = { username };

  const validate = Yup.object({
    username: Yup.string().required("Username is required"),
  });

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      dispatch(updateAvatar({ avatar: file }));
    }
  };

  const submit = (values, { setSubmitting, setErrors }) => {
    try {
      if (values.username === username) {
        setErrors({
          username: "Username must be different from the current one.",
        });
        return;
      }
      dispatch(updateUsername(values.username));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={submit}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form className="account-form form">
          <div className="form_control">
            <label htmlFor="avatar" className="avatar-label">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => {
                handleAvatarChange(event);
                setFieldValue("avatar", event.currentTarget.files[0]);
              }}
              className="form_input"
            />
          </div>
          {avatar && (
            <img src={avatar} alt="Avatar Preview" className="avatar-preview" />
          )}

          <FormInput label="Username" name="username" />
          <span className="error">{error}</span>
          <FloatingAlert
            message={message}
            seconds={5}
            callback={() => dispatch(clearAll())}
          />
          <button type="submit" className="btn" disabled={isSubmitting}>
            Save Changes
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MainInfoForm;
