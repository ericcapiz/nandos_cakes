import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { m } from "framer-motion";
import { pageAnimation } from "../animation";
import { FaUser, FaEnvelope, FaPhone, FaComments, FaTag } from "react-icons/fa";
import * as emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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
    setSubmitStatus("idle");

    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        {
          subject: form.subject,
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      );

      console.log("Success:", result);
      setSubmitStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
            {submitStatus === "success" && (
              <div className="success-message">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="error-message">
                Sorry, there was an error sending your message. Please try
                again.
              </div>
            )}

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
                  required
                />
              </div>
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
                  required
                />
              </div>
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
                  required
                />
              </div>
            </FormGroup>

            <FormGroup className="input-group">
              <div className="icon-input">
                <FaTag className="input-icon" />
                <Input
                  id="subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={inputChange}
                  placeholder="Subject"
                  required
                />
              </div>
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
                  required
                />
              </div>
            </FormGroup>

            <Button
              type="submit"
              disabled={isSubmitting}
              className={isSubmitting ? "submitting" : ""}
            >
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
