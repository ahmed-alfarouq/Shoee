import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required!"),
  lastName: Yup.string().required("Last name is required!"),
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  subject: Yup.string().required("Subject is required!"),
  message: Yup.string().required("Message is required!"),
});

const ContactForm = ({ submit }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
    >
      <Form className="contact-form form">
        <h2 className="title">Send Us A Message</h2>

        <div className="form_control">
          <Field
            type="text"
            name="firstName"
            className="form_input"
            placeholder=" "
          />
          <label className="form_label" htmlFor="firstName">
            First Name
          </label>
        </div>
        <ErrorMessage name="firstName" component="div" className="error" />
        <div className="form_control">
          <Field
            type="text"
            name="lastName"
            className="form_input"
            placeholder=" "
          />
          <label className="form_label" htmlFor="lastName">
            Last Name
          </label>
        </div>
        <ErrorMessage name="lastName" component="div" className="error" />

        <div className="form_control">
          <Field
            type="email"
            name="email"
            className="form_input"
            placeholder=" "
          />
          <label className="form_label" htmlFor="email">
            Email
          </label>
        </div>
        <ErrorMessage name="email" component="div" className="error" />

        <div className="form_control">
          <Field
            type="text"
            name="subject"
            className="form_input"
            placeholder=" "
          />
          <label className="form_label" htmlFor="subject">
            Subject
          </label>
        </div>
        <ErrorMessage name="subject" component="div" className="error" />

        <div className="form_control">
          <Field
            as="textarea"
            name="message"
            className="form_input"
            placeholder=" "
          />
          <label className="form_label" htmlFor="message">
            Your Message
          </label>
        </div>
        <ErrorMessage name="message" component="div" className="error" />

        <button type="submit" className="btn">
          Send Message
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
