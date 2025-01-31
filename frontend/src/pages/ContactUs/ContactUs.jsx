import ContactForm from "./sections/ContactForm";

const ContactUs = () => {
  const GOOGLE_SECRET = process.env.REACT_APP_GOOGAL_API_SECRET;
  return (
    <main className="contact-us">
      <section className="container">
        <div className="content">
          <div className="left">
            <h1 className="title">Say Hello.</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p className="info">212 7th St SE, Washington, DC 20003, USA</p>
            <p className="info">info@example.com</p>
          </div>
          <div className="map-container">
            <iframe
              title="Google Map"
              src={`https://www.google.com/maps/embed/v1/view?key=${GOOGLE_SECRET}&center=0,0&zoom=2`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
};

export default ContactUs;
