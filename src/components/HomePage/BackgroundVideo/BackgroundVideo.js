import React from "react";
import "./BackgroundVideo.css"; // Assuming you have a CSS file for your styles
import backgroundVideo from "../../../assets/videos/finalVideo.mp4";

function BackgroundVideo() {
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="background-container">
      <video
        autoPlay
        muted
        loop
        id="background-video"
        className="background-video"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* You can still overlay other components here */}
    </div>
  );
}

export default BackgroundVideo;
