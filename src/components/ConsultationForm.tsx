import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaCalendar,
  FaClock,
  FaUsers,
  FaDollarSign,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaComments,
} from "react-icons/fa";
import { BsCake } from "react-icons/bs";
import * as emailjs from "emailjs-com";

interface ConsultationData {
  name: string;
  email: string;
  phone: string;
  date: Date | null;
  time: string;
  eventType: string;
  guestCount: string;
  budget: string;
  message: string;
}

const ConsultationForm = () => {
  const [consultation, setConsultation] = useState<ConsultationData>({
    name: "",
    email: "",
    phone: "",
    date: null,
    time: "",
    eventType: "",
    guestCount: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleConsultationChange = (
    field: keyof ConsultationData,
    value: any
  ) => {
    setConsultation((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        {
          name: consultation.name,
          email: consultation.email,
          phone: consultation.phone,
          date: consultation.date ? consultation.date.toLocaleDateString() : "",
          time: consultation.time,
          eventType: consultation.eventType,
          guestCount: consultation.guestCount,
          budget: consultation.budget,
          message: consultation.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      );

      console.log("Success:", result);
      setSubmitStatus("success");
      setConsultation({
        name: "",
        email: "",
        phone: "",
        date: null,
        time: "",
        eventType: "",
        guestCount: "",
        budget: "",
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
    <Form className="consultation-form" onSubmit={handleSubmit}>
      <FormGroup className="input-group">
        <div className="icon-input">
          <FaUser className="input-icon" />
          <Input
            type="text"
            name="name"
            value={consultation.name}
            onChange={(e) => handleConsultationChange("name", e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>
      </FormGroup>

      <FormGroup className="input-group">
        <div className="icon-input">
          <FaEnvelope className="input-icon" />
          <Input
            type="email"
            name="email"
            value={consultation.email}
            onChange={(e) => handleConsultationChange("email", e.target.value)}
            placeholder="Your Email"
            required
          />
        </div>
      </FormGroup>

      <FormGroup className="input-group">
        <div className="icon-input">
          <FaPhone className="input-icon" />
          <Input
            type="text"
            name="phone"
            value={consultation.phone}
            onChange={(e) => handleConsultationChange("phone", e.target.value)}
            placeholder="Your Phone Number"
            required
          />
        </div>
      </FormGroup>

      <FormGroup className="input-group">
        <div className="icon-input">
          <FaCalendar className="input-icon" />
          <DatePicker
            selected={consultation.date}
            onChange={(date) => handleConsultationChange("date", date)}
            minDate={new Date()}
            placeholderText="Select Date"
            className="form-control"
            required
          />
        </div>
      </FormGroup>

      <FormGroup className="input-group">
        <div className="icon-input">
          <FaClock className="input-icon" />
          <Input
            type="select"
            name="time"
            value={consultation.time}
            onChange={(e) => handleConsultationChange("time", e.target.value)}
            required
          >
            <option value="">Select Time</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
          </Input>
        </div>
      </FormGroup>

      <FormGroup className="input-group">
        <div className="icon-input">
          <BsCake className="input-icon" />
          <Input
            type="select"
            name="eventType"
            value={consultation.eventType}
            onChange={(e) =>
              handleConsultationChange("eventType", e.target.value)
            }
            required
          >
            <option value="">Select Event Type</option>
            <option value="birthday">Birthday</option>
            <option value="wedding">Wedding</option>
            <option value="anniversary">Anniversary</option>
            <option value="corporate">Corporate</option>
            <option value="other">Other</option>
          </Input>
        </div>
      </FormGroup>

      <FormGroup className="input-group">
        <div className="icon-input">
          <FaUsers className="input-icon" />
          <Input
            type="select"
            name="guestCount"
            value={consultation.guestCount}
            onChange={(e) =>
              handleConsultationChange("guestCount", e.target.value)
            }
            required
          >
            <option value="">Expected Number of Guests</option>
            <option value="1-20">1-20</option>
            <option value="21-50">21-50</option>
            <option value="51-100">51-100</option>
            <option value="100+">100+</option>
          </Input>
        </div>
      </FormGroup>

      <FormGroup className="input-group">
        <div className="icon-input">
          <FaDollarSign className="input-icon" />
          <Input
            type="select"
            name="budget"
            value={consultation.budget}
            onChange={(e) => handleConsultationChange("budget", e.target.value)}
            required
          >
            <option value="">Budget Range</option>
            <option value="100-200">$100-$200</option>
            <option value="201-500">$201-$500</option>
            <option value="501-1000">$501-$1000</option>
            <option value="1000+">$1000+</option>
          </Input>
        </div>
      </FormGroup>

      <FormGroup className="input-group">
        <div className="icon-input">
          <FaComments className="input-icon" />
          <Input
            type="textarea"
            name="message"
            value={consultation.message}
            onChange={(e) =>
              handleConsultationChange("message", e.target.value)
            }
            placeholder="Additional Details or Questions"
            required
          />
        </div>
      </FormGroup>

      <Button type="submit" color="primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit Consultation Request"}
      </Button>

      {submitStatus === "success" && (
        <div className="success-message">
          Thank you! Your consultation request has been sent successfully.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="error-message">
          Sorry, there was an error sending your request. Please try again.
        </div>
      )}
    </Form>
  );
};

export default ConsultationForm;
