import React, { useEffect, useState } from "react";
import * as emailjs from "emailjs-com";
import * as yup from "yup";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { m } from "framer-motion";
import { pageAnimation } from "../animation";

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
  const emptyData: FormData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const emptyErrors: FormErrors = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const [form, setForm] = useState<FormData>(emptyData);
  const [errors, setErrors] = useState<FormErrors>(emptyErrors);
  const [serverError] = useState<string>("");
  const [button, setButton] = useState<boolean>(true);

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
  });

  useEffect(() => {
    formSchema.isValid(form).then((valid) => setButton(!valid));
  }, [form, formSchema]);

  const validateChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const schema = yup.reach(formSchema, e.target.name) as yup.StringSchema;
      await schema.validate(e.target.value);
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    } catch (err: unknown) {
      if (err instanceof yup.ValidationError) {
        setErrors({
          ...errors,
          [e.target.name]: err.message,
        });
      }
    }
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const newFormData = {
      ...form,
      [e.target.name]: e.target.value,
    };
    validateChange(e);
    setForm(newFormData);
  };

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      to_name: "Fernando",
      subject: form.subject,
      message: form.message,
      phone: form.phone,
    };

    try {
      await emailjs.send(
        "service_ID",
        "template_ID",
        templateParams,
        "user_ID"
      );
      setForm(emptyData);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <m.div
      className="contact"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="form-container">
        <h1>Contact Me!</h1>
        <Form onSubmit={formSubmit}>
          {serverError ? <p>{serverError}</p> : null}

          <FormGroup>
            <Label htmlFor="name">
              <p>Full Name:</p>
              <Input
                id="name"
                type="text"
                name="name"
                data-cy="name"
                placeholder="Your Full Name"
                value={form.name}
                onChange={inputChange}
              />
              {errors.name?.length > 0 ? <p>{errors.name}</p> : null}
            </Label>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">
              <p>Email:</p>
              <Input
                id="email"
                type="email"
                name="email"
                data-cy="email"
                placeholder="Your Email"
                value={form.email}
                onChange={inputChange}
              />
              {errors.email?.length > 0 ? <p>{errors.email}</p> : null}
            </Label>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">
              <p>Phone Number:</p>
              <Input
                id="phone"
                type="text"
                name="phone"
                data-cy="phone"
                placeholder="Your Phone Number"
                value={form.phone}
                onChange={inputChange}
              />
              {errors.phone?.length > 0 ? <p>{errors.phone}</p> : null}
            </Label>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="subject">
              <p>Subject:</p>
              <Input
                id="subject"
                type="text"
                name="subject"
                data-cy="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={inputChange}
              />
              {errors.subject?.length > 0 ? <p>{errors.subject}</p> : null}
            </Label>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">
              <p>Message:</p>
              <Input
                id="message"
                type="textarea"
                name="message"
                data-cy="message"
                placeholder="Your Message"
                value={form.message}
                onChange={inputChange}
              />
              {errors.message?.length > 0 ? <p>{errors.message}</p> : null}
            </Label>
          </FormGroup>

          <Button type="submit" data-cy="submit" disabled={button}>
            Submit
          </Button>
        </Form>
      </div>
    </m.div>
  );
};

export default Contact;
