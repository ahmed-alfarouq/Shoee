import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormInput from "../../../components/FormInput";
import Spinner from "../../../features/Spinner";

import { updateAvatar } from "../../../utils/api";

const MainInfoForm = () => {
  const avatar = useSelector((state) => state.user.avatar);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  const loading = useSelector((state) => state.user.loading);
  const username = useSelector((state) => state.user.username);
  const error = useSelector((state) => state.user.error);
  const message = useSelector((state) => state.user.message);

  const initialValues = { username };

  const validate = Yup.object({
    username: Yup.string().required("Username is required"),
  });

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      dispatch(updateAvatar({ avatar: file, token }));
    }
  };

  const submit = (values) => {
    dispatch();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={submit}
    >
      {({ setFieldValue }) => (
        <Form className="account-form form">
          {loading && <Spinner />}
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
          {avatar?.length && (
            <img src={avatar} alt="Avatar Preview" className="avatar-preview" />
          )}

          <FormInput label="Username" name="username" />
          <span className="error">{error}</span>
          <button type="submit" className="btn">
            Save Changes
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MainInfoForm;
