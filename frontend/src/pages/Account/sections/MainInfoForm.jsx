import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormInput from "../../../components/FormInput";

const MainInfoForm = () => {
  const [avatar, setAvatar] = useState(null);

  const dispatch = useDispatch();

  const username = useSelector((state) => state.auth.user.username);
  const initialValues = { username };

  const validate = Yup.object({
    username: Yup.string().required("Username is required"),
  });

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
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

          <button type="submit" className="btn">
            Save Changes
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MainInfoForm;
