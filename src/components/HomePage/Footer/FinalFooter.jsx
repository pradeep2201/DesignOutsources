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
import Footer from './Footer';
import "./Footer.css";
const FinalFooter = ({ onButtonClick }) => {

  const handleButtonClick = (label) => {
    onButtonClick(label)
  }
  return (
    <>
      <div className="footer-top-scr">
        <span>Get connected with us on social networks:</span>
        <div className="social-icons-scr">
        <div className="social-icons-container-scr">
                <Facebook onClick={()=> window.open("https://www.facebook.com/", "_blank")} className="social-icon" />
                <Twitter onClick={()=> window.open("https://x.com/", "_blank")} className="social-icon" />
                <Instagram onClick={()=> window.open("https://www.instagram.com/", "_blank")} className="social-icon" />
                <LinkedIn onClick={()=> window.open("https://www.linkedin.com/", "_blank")} className="social-icon" />
                <Pinterest onClick={()=> window.open("https://www.pinterest.com/", "_blank")} className="social-icon" />
                {/* <Settings className="social-icon" /> */}
                <YouTube onClick={()=> window.open("https://www.youtube.com/", "_blank")} className="social-icon" />
                {/* <Apps className="social-icon" /> */}
              </div>
        </div>
      </div>
      <Footer onButtonClick={handleButtonClick} />
      
    </>
  );
};

export default FinalFooter;
