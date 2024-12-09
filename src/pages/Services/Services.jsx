import React from "react";
import Footer from "../../components/HomePage/Footer/Footer";
import FinalFooter from "../../components/HomePage/Footer/FinalFooter";
import GradientText from "../../components/ServicePage/GradientText/GradientText";
import { Container } from "@mui/material";
import TrustedBySection from '../../components/HomePage/TrustedBySection';
import LeftImageService from '../../components/ServicePage/LeftImageService/LeftImageService';

import "./Services.css";

export default function Services() {
  return (
    <>
      <div className="service-main-bg-img">
        <GradientText />
      </div>
      <Container sx={{ marginTop: 4, marginBottom: 4 }}>
        <div className="main-services-page-wrapper">
          <div><LeftImageService /></div>
        </div>
      </Container>
      <TrustedBySection />
      <FinalFooter />
    </>
  );
}
