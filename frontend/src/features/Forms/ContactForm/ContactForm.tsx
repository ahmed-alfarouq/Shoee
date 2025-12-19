import { Formik, Form } from "formik";

import styles from "./ContactForm.module.scss";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import { contactUsSchema } from "@/schema/contactus";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactUsSchema}
      onSubmit={() => {}}
    >
      <Form className={`${styles.contact_form} form`}>
        <h2 className={styles.title}>Send Us A Message</h2>
        <Input name="firstName" label="First Name" placeholder=" " />
        <Input name="lastName" label="Last Name" placeholder=" " />
        <Input type="email" name="email" label="Email" placeholder=" " />
        <Input name="subject" label="Subject" placeholder=" " />
        <Input type="textarea" name="message" label="Message" placeholder=" " />

        <Button type="submit" size="lg">
          send your message
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
