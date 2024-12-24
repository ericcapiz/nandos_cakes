import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { m } from "framer-motion";
import { pageAnimation } from "../animation";
import { FaUser, FaEnvelope, FaPhone, FaComments } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const inputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setIsSubmitting(false);
  };

  return (
    <m.div
      className="contact-page"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="contact-container">
        {/* Left Section - Quick Contact */}
        <section className="quick-contact">
          <h2>Quick Contact</h2>
          <p>Send me a message and I'll get back to you as soon as possible.</p>

          <Form onSubmit={formSubmit} className="contact-form">
            <FormGroup className="input-group">
              <div className="icon-input">
                <FaUser className="input-icon" />
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={inputChange}
                  placeholder="Your Full Name"
                />
              </div>
              {errors.name && <span className="error">{errors.name}</span>}
            </FormGroup>

            <FormGroup className="input-group">
              <div className="icon-input">
                <FaEnvelope className="input-icon" />
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={inputChange}
                  placeholder="Your Email"
                />
              </div>
              {errors.email && <span className="error">{errors.email}</span>}
            </FormGroup>

            <FormGroup className="input-group">
              <div className="icon-input">
                <FaPhone className="input-icon" />
                <Input
                  id="phone"
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={inputChange}
                  placeholder="Your Phone Number"
                />
              </div>
              {errors.phone && <span className="error">{errors.phone}</span>}
            </FormGroup>

            <FormGroup className="input-group">
              <div className="icon-input">
                <FaComments className="input-icon" />
                <Input
                  id="message"
                  type="textarea"
                  name="message"
                  value={form.message}
                  onChange={inputChange}
                  placeholder="Your Message"
                />
              </div>
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </FormGroup>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </Form>
        </section>

        {/* Right Section - Consultation Booking */}
        <section className="consultation-booking">
          <h2>Book a Consultation</h2>
          <p>Schedule a time to discuss your custom cake needs.</p>

          <div className="coming-soon">
            <p>Consultation booking coming soon!</p>
          </div>
        </section>
      </div>
    </m.div>
  );
};

export default Contact;
