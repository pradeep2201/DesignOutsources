import React from "react";
import "./ContactUs.css";
import ContactForm from "../../components/ContactPage/ContactForm";
import Footer from "../../components/HomePage/Footer/Footer";
import FinalFooter from "../../components/HomePage/Footer/FinalFooter";
import ContactPageGradient from "../../components/ContactPage/ContactPageGradient/ContactPageGradient";
export default function ContactUs() {
  return (
    <>
      <div className="contactus-main-bg-img">
        <ContactPageGradient />
      </div>
      <div className="contact-us-page-form-wrapper">
        <div className="contact-us-Primary-form-wrapper">
          <div className="contact-us-Secondary-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>

      <FinalFooter />
    </>
  );
}
