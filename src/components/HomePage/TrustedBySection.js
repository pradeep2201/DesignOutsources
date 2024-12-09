import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const TrustedBySection = () => {
  const data = [
    { number: "1B+", text: "creative edits made every month", color: "#00C2FF" },
    { number: "1M+", text: "AI images generated daily", color: "#FF3366" },
    { number: "20+", text: "generative AI tools to transform your workflow", color: "#6B0AEF" },
    { number: "300M+", text: "editable photos, templates, and more", color: "#8E44AD" },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "2rem 1rem",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          fontWeight: "bold",
          mb: 2,
          color: "black",
        }}
      >
        Trusted by{" "}
        <span style={{ color: "#6B0AEF" }}>150 million+ creators</span>
      </Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          color: "gray",
          mb: 4,
        }}
      >
        Join our creative community
      </Typography>

      {/* Stats Grid */}
      <Grid container spacing={3} justifyContent={'space-between'} paddingTop={'20px'}>
        {data.map((item, index) => (
          <Grid
            item
            xs={11.5}
            sm={5.8}
            md={2.8}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1rem",
              backgroundColor: "#F7F7F7",
              borderRadius: "8px",
              justifyContent: 'center'
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: item.color,
                mb: 1,
              }}
            >
              {item.number}
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "black",
              }}
            >
              {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrustedBySection;
