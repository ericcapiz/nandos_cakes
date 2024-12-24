import React from "react";
import { m } from "framer-motion";
import { pageAnimation } from "../animation";
import ConsultationForm from "../components/ConsultationForm";

const Contact = () => {
  return (
    <m.div
      className="contact-page"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="contact-container">
        <section className="consultation-section">
          <h2>Book a Consultation</h2>
          <p>
            Schedule a time to discuss your custom cake needs. Please fill out
            the form below and I'll get back to you as soon as possible.
          </p>

          <ConsultationForm />
        </section>
      </div>
    </m.div>
  );
};

export default Contact;
