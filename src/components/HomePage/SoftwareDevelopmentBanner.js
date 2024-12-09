import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const SoftwareDevelopmentBanner = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "2rem 1rem",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "#03abeb",
          fontSize: { xs: "1.8rem", sm: "2.5rem" },
          mb: 2,
        }}
      >
        #1 <span>India's leading Photo</span> <br />
        Editing Company
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontSize: { xs: "1rem", sm: "1.1rem" },
          color: "text.secondary",
          mb: 4,
        }}
      >
        Are you looking for a reliable development partner for your digital
        needs? Design Outsourcing is the right partner to share your brilliant
        project idea. We listen to, validate, and transform unique business
        ideas into exceptional website images.
        <br />
        <br />
        With our profound understanding of advanced technologies and over a
        decade of experience, we deliver <strong>
          custom photos
        </strong>{" "}
        for startups and large enterprises. Our incredible team of dedicated
        developers and we have a 100% track of delivering
        quality solutions with assured customer satisfaction. Reach out to our{" "}
        <strong>Experienced developers</strong> team today and transform your
        dream ideas into world-class digital solutions and products.
      </Typography>

      {/* Button */}
      <NavLink to="/services">
        <Button
          variant="contained"
          color= "#ffffff"
          sx={{
            padding: "0.8rem 2rem",
            fontSize: "1rem",
            borderRadius: "30px",
            fontWeight: "bold",
            backgroundColor: "#1976d2",
            color: "#fff"
          }}
        >
          Discover more about Services
        </Button>
      </NavLink>
    </Box>
  );
};

export default SoftwareDevelopmentBanner;
