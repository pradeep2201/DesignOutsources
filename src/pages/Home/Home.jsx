import React, { useState } from "react";
import { Box } from "@mui/material";
import BeforeAfterWidget from "../../components/HomePage/BeforeAfterWidget";
import After from "../../assets/images/Single-After.jpg";
import Before from "../../assets/images/Single-Before.jpg";
import { PrimaryAnimatedText, SecondaryAnimatedText} from "../../components/HomePage/AnimatedText/AnimatedText";
import AnimatedButtons from "../../components/HomePage/AnimatedButtons";
import PortfolioSection from "../../components/HomePage/PortfolioSection";
import VideoPlayer from "../../components/HomePage/VideoPlayer";
import StatsSection from "../../components/HomePage/StartsSection/StartSection";
import SoftwareDevelopmentBanner from "../../components/HomePage/SoftwareDevelopmentBanner";
import TrustedBySection from "../../components/HomePage/TrustedBySection";
import Footer from "../../components/HomePage/Footer/Footer";
import FinalFooter from "../../components/HomePage/Footer/FinalFooter";
import BackgroundVideo from "../../components/HomePage/BackgroundVideo/BackgroundVideo";
// import firstVideo from "../../assets/videos/Video.mp4";
// import secondVideo from "../../assets/videos/video1.mp4";
import thirdVideo from "../../assets/videos/finalVideo.mp4";
import "./Home.css";
import UpdatedFooter from "../../components/HomePage/Footer/UpdatedFooter";

const Home = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [step, setStep] = useState(1); // Controls animation sequence
  const [animationCompleted, setAnimationCompleted] = useState(false); // Ensures animations happen only once

  const handleAnimationComplete = () => {
    setStep((prev) => prev + 1);
    if (step === 3) setAnimationCompleted(true); // Marks completion after all animations
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const topOffset = section.getBoundingClientRect().top + window.scrollY; // Get section's top position
      window.scrollTo({
        top: topOffset - 75, // Adjust to move 50px below
        behavior: 'smooth',
      });
    }
  };

  const handleButtonClick = (label) => {
    if(label === 'Portfolio') {
      scrollToSection('portfolio-section');
    } else if(label === 'About') {
      scrollToSection('WhyWeAreBest-section');
    } else if(label === 'Services') {
      scrollToSection('services-main-section');
    } else {
      scrollToSection('contactus-section');
    }
  };

  return (
    <>
      <BackgroundVideo />
      <section id="home" className="hero-section overlay-content">
        <Box
          paddingTop={"100px"}
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={"80vw"}
          height={"80vh"}
          textAlign="center"
          p={4}
        >
          {step >= 1 && (
            <PrimaryAnimatedText
              text="Weelcome to Design Outsourcing!!"
              tag="h1"
              clsNme={"first-cnt-web-mode"}
              onComplete={animationCompleted ? null : handleAnimationComplete}
            />
          )}

          {step >= 2 && (
            <SecondaryAnimatedText
              text="Thhe only AI-powered creative companion you’ll ever need to grow your brand. Get it all done with Design Outsourcing, ultimate creative suite."
              clsNme={"second-snt-we-mode"}
              tag="h5"
              onComplete={animationCompleted ? null : handleAnimationComplete}
            />
          )}

          {step === 3 && (
            <AnimatedButtons
              buttonLabels={[
                "Portfolio",
                "About",
                "About",
                "Services",
                "ContactUs",
              ]}
              onButtonClick={handleButtonClick}
            />
          )}
        </Box>
      </section>
      <section id="portfolio-section">
        <div className="portfolio-main-wrapper">
          <PortfolioSection />
        </div>
      </section>
      <section className="why-we-are-section-cls" id="WhyWeAreBest-section">
        <div className="WhyWeAreBest-main-wrapper">
          <VideoPlayer videos={[thirdVideo]} />
          <StatsSection />
        </div>
      </section>
      <section id="services-main-section">
        <div className="services-main-wrap">
          <div className="service-left-wrap">
            <SoftwareDevelopmentBanner />
          </div>
          <div className="service-right-wrap">
            <div className="before-after-wid-right">
            <BeforeAfterWidget beforeImage={After} afterImage={Before} />
            </div>
            
          </div>
        </div>
      </section>
      {/* <BetterDesignSection /> */}
      <section id="contactus-section">
        <div className="home-footer-sections">
          {/* <Footer /> */}
          {/* <UpdatedFooter /> */}
          <FinalFooter onButtonClick={handleButtonClick} />
        </div>
      </section>
    </>
  );
};

export default Home;
