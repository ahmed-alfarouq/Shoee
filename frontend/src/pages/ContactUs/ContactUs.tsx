import styles from "./ContactUs.module.scss";

import { Button } from "@/components/Button";
import { ContactForm } from "@/features/Forms/ContactForm";

const GOOGLE_SECRET = import.meta.env.VITE_GOOGLE_API_SECRET;

const ContactUs = () => {
  return (
    <section className={`${styles.contact_us} container`}>
      <div className={styles.content}>
        <article className={styles.left}>
          <h1 className={styles.title}>Say Hello.</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <p>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, making it look like readable English.
          </p>
          <address className={styles.info}>
            <p>212 7th St SE, Washington, DC 20003, USA</p>
            <Button asChild variant="link">
              <a href="mailto:info@example.com">info@example.com</a>
            </Button>
          </address>
        </article>
        <figure className={styles.map_container} role="region">
          <iframe
            title="Location map"
            aria-label="Company location displayed on Google Maps"
            src={`https://www.google.com/maps/embed/v1/view?key=${GOOGLE_SECRET}&center=0,0&zoom=2`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </figure>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactUs;
