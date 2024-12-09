import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = ({ onButtonClick }) => {

  return (
    <footer
      style={{
        backgroundColor: "rgba(2, 16, 48)",
        color: "white",
        padding: "20px 10px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Links Section */}
        <div className="footer-logo-desc">
          <div className="logo">Design Outsourcing</div>
          <p>
            {`        Design Outsourcing Solutions is a leading software development company with a
            professional team specializing in building custom mobile apps,
            websites, and software solutions.`}
          </p>
        </div>

        {/* Contact Information Section */}
        <div
          style={{
            flex: "1 1 100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1 1 25%",
              color: "white",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            <p>
              <strong>Company</strong>
            </p>
            <p>Portfolio</p>
            <p>About Us</p>
            <p>Services</p>
            <p>Contact</p>
            <p>
              <p>
                Blog && Career <span className="hiring">We are Hiring</span>
              </p>
            </p>
            <p>FAQs</p>
            {/* <p>Sitemap</p> */}
          </div>
          <div
            style={{
              flex: "1 1 23%",
              color: "white",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            <p>
              <strong>SERVICES</strong>
            </p>
            <p>Photo Editing Service</p>
            <p>Video Editing Service</p>
            <p>Virtual Stating Service</p>
            <p>HDR Service </p>
            <p>Day To Dusk Service</p>
          </div>
          {/* <div
            style={{
              flex: "1 1 22%",
              color: "white",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            <p>
              <strong>TERMS OF USE</strong>
            </p>
            <p>Privacy Policy</p>
            <p>Terms && Conditions</p>
          </div> */}
          <div
            style={{
              flex: "1 1 30%",
              color: "white",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            <p>
              <strong>FOR BUSINESS ENQUIRY</strong>
            </p>
            <p>✉️ editors.support@designoutsources.com</p>
            <p>📞 +91 73582 39850</p>
            <p>
              <strong>Address</strong>
            </p>
            <p>Salem, TamilNadu,</p>
            <p>India</p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>

      {/* Social Media and Footer Note */}
      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          fontSize: "12px",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: "10px",
        }}
      >
        <p>© 2024 Backspace. All Rights Reserved</p>
        {/* <p>CIN - U74300WB1996PTC000006 | GST - 19AACCP9999P1ZM</p> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <a onClick={()=> window.open("https://www.facebook.com/", "_blank")} style={{ color: "white", cursor: 'pointer' }}>
            Facebook
          </a>
          <a onClick={()=> window.open("https://x.com/", "_blank")} style={{ color: "white", cursor: 'pointer' }}>
            Twitter
          </a>
          <a onClick={()=> window.open("https://www.linkedin.com/", "_blank")} style={{ color: "white", cursor: 'pointer' }}>
            LinkedIn
          </a>
          <a onClick={()=> window.open("https://www.instagram.com/", "_blank")} style={{ color: "white", cursor: 'pointer' }}>
            Instagram
          </a>
          <a onClick={()=> window.open("https://www.pinterest.com/", "_blank")} style={{ color: "white", cursor: 'pointer' }}>
            Pinterest
          </a>
          <a onClick={()=> window.open("https://www.youtube.com/", "_blank")} style={{ color: "white", cursor: 'pointer' }}>
            Youtube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
