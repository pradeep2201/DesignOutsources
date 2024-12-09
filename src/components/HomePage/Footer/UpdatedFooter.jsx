import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Pinterest,
  YouTube,
  Apps,
  Settings,
} from "@mui/icons-material";
import "./UpdatedFooter.css"; // Create this file for custom styles

const UpdatedFooter = () => {
  return (
    <>
      <div className="footer-top-scr">
        <span>Get connected with us on social networks:</span>
        <div className="social-icons-scr">
        <div className="social-icons-container-scr">
                <Facebook className="social-icon" />
                <Twitter className="social-icon" />
                <Instagram className="social-icon" />
                <LinkedIn className="social-icon" />
                <Pinterest className="social-icon" />
                <Settings className="social-icon" />
                <YouTube className="social-icon" />
                <Apps className="social-icon" />
              </div>
        </div>
      </div>
      <footer className="footer-scr">
        <div className="footer-content-scr">
          <div className="footer-column-scr">
            <h4>Design Outsourcing</h4>
            <div></div>
            
            
            
          </div>
          {/* <div className="footer-column-scr">
            <h4>PRODUCTS</h4>
            <ul>
              <li>
                <Link to="/mdbootstrap">MDBootstrap</Link>
              </li>
              <li>
                <Link to="/mdwordpress">MDWordPress</Link>
              </li>
              <li>
                <Link to="/brandflow">BrandFlow</Link>
              </li>
              <li>
                <Link to="/bootstrap-angular">Bootstrap Angular</Link>
              </li>
            </ul>
          </div> */}
          <div className="footer-column-scr">
            <h4>USEFUL LINKS</h4>
            <ul>
              <li>
                <Link to="/account">About Us</Link>
              </li>
              <li>
                <Link to="/account">Services</Link>
              </li>
              <li>
                <Link to="/affiliate">Contact</Link>
              </li>
              <li>
                <Link to="/shipping">Blog && Career</Link>
              </li>
              <li>
                <Link to="/help">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column-scr">
            <h4>CONTACT</h4>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> 48, North Terrace,
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> Penong SA-5690,
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> Australia
              </li>
              <p></p>
              <li>
                <i className="fas fa-envelope"></i> editors.support@designoutsources.com
              </li>
              <li>
                <i className="fas fa-phone"></i> +61 485906541
              </li>
            </ul>
          </div>
        </div>
        <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          fontSize: "12px",
          // borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: "10px",
        }}
      >
        <p>© 2024 Backspace All Rights Reserved</p>
        <p>CIN - U74300WB1996PTC000006 | GST - 19AACCP9999P1ZM</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <a href="#" style={{ color: "white" }}>
            Facebook
          </a>
          <a href="#" style={{ color: "white" }}>
            Twitter
          </a>
          <a href="#" style={{ color: "white" }}>
            LinkedIn
          </a>
          <a href="#" style={{ color: "white" }}>
            Pinterest
          </a>
          <a href="#" style={{ color: "white" }}>
            Instagram
          </a>
        </div>
      </div>
        <div className="footer-bottom-scr">
          <p>© Software developed by Backspace Pvt. Ltd., Bangalore.</p>
        </div>
      </footer>
    </>
  );
};

export default UpdatedFooter;
