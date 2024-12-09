import React, { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const AnimatedButtons = ({ buttonLabels, onButtonClick }) => {
  const [visibleButtons, setVisibleButtons] = useState([]);

  const StyledButton = styled(Button)({
    borderRadius: "34px",
    color: "black",
    fontWeight: "800",
    backgroundColor: "rgb(0, 252, 117)",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#00fc54e0",// old color #fc00dd
      color: "white",
    },
  });

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleButtons((prev) => [...prev, buttonLabels[index]]);
      index = index + 1;
      if (index === buttonLabels.length - 1) clearInterval(interval);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box display="flex" gap={2} mt={2}>
      {visibleButtons.map((label, index) => (
        <StyledButton
          key={index}
          variant="contained"
          color="primary"
          onClick={() => onButtonClick(label)}
        >
          {label}
        </StyledButton>
      ))}
    </Box>
  );
};

export default AnimatedButtons;
