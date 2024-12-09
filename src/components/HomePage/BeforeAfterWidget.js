import React, { useState } from "react";
import styled from "styled-components";

// Container for the widget
const Container = styled.div`
  position: relative;
  width: 100%; /* Set desired width */
  height: 100%; /* Set desired height */
  overflow: hidden;
  border: 2px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
`;

// Styles for the images
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

// Styling for the overlay image
const AfterImage = styled(Image)`
  clip-path: ${(props) => `polygon(0 0, ${props.clipPercentage}% 0, ${props.clipPercentage}% 100%, 0 100%)`};
`;

// Slider styling
const Slider = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.sliderPosition}%;
  height: 100%;
  width: 4px;
  background-color: #007bff;
  transform: translateX(-50%);
`;

// Label styling
const Label = styled.div`
  position: absolute;
  top: 10px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  z-index: 1;

  ${(props) =>
    props.type === "before"
      ? `
    left: 10px; /* Position for "Before" */
  `
      : `
    right: 10px; /* Position for "After" */
  `}
`;

const BeforeAfterWidget = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - bounds.left; // Get mouse X relative to the container
    const percentage = (mouseX / bounds.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage))); // Clamp between 0 and 100
  };

  return (
    <Container onMouseMove={handleMouseMove}>
      {/* Labels */}
      <Label type="before">Before</Label>
      <Label type="after">After</Label>

      {/* Before Image */}
      <Image src={beforeImage} alt="Before" />

      {/* After Image */}
      <AfterImage src={afterImage} alt="After" clipPercentage={sliderPosition} />

      {/* Slider */}
      <Slider sliderPosition={sliderPosition} />
    </Container>
  );
};

export default BeforeAfterWidget;
