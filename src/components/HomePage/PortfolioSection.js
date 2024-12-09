import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { NavLink } from "react-router-dom";

const PortfolioSection = () => {
  return (
    <Box
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        padding: '2.5rem 8rem 1.5rem 8rem !important',
        py: 6,
        px: 4,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
          background: "linear-gradient(to right, #ff007f, #007fff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our <span style={{ color: "#ffffff" }}>Portfolio</span>
      </Typography>
      {/* <Typography
        variant="subtitle1"
        sx={{
          marginTop: 2,
          marginBottom: 4,
          fontSize: '1.2rem',
          fontWeight: '300',
        }}
      >
        Disclosing our top business projects across various IT niches!
      </Typography> */}

      <List
        sx={{
          display: "inline-block",
          textAlign: "left",
          color: "black",
          fontSize: "1rem",
          fontWeight: 700,
        }}
      >
        <ListItem
          disableGutters
          display={"flex"}
          color={"#000"}
          sx={{ gap: "10px" }}
        >
          <TaskAltIcon />
          <ListItemText sx={{ fontSize: "1.5rem !important", fontWeight: '500' }} disableTypography primary="Whether you’re a photographer, business owner, or simply looking to enhance personal photos, we offer a range of solutions tailored to your needs." />
        </ListItem>
        <ListItem
          disableGutters
          display={"flex"}
          color={"#000"}
          sx={{ gap: "10px" }}
        >
          <TaskAltIcon color="black" />
          <ListItemText sx={{ fontSize: "1.5rem !important", fontWeight: '500' }} disableTypography primary="Bring your images to life with our premium photo editing services." />
        </ListItem>
        <ListItem
          disableGutters
          display={"flex"}
          color={"#000"}
          sx={{ gap: "10px" }}
        >
          <TaskAltIcon />
          <ListItemText sx={{ fontSize: "1.5rem !important", fontWeight: '500' }} disableTypography primary="Elevate your images with our comprehensive photo editing solutions, designed to bring out the best in every shot. " />
        </ListItem>
        <ListItem
          disableGutters
          display={"flex"}
          color={"#000"}
          sx={{ gap: "10px" }}
        >
          <TaskAltIcon />
          <ListItemText sx={{ fontSize: "1.5rem !important", fontWeight: '500' }} disableTypography primary="Whether for personal use, business, or creative projects, our expert team is dedicated to transforming your photos into masterpieces. " />
        </ListItem>
      </List>

      <div>
        <NavLink to="/services">
          <Button
            variant="contained"
            sx={{
              marginTop: 4,
              backgroundColor: "#ffd700",
              color: "#000",
              fontWeight: "bold",
              fontSize: "1rem",
              borderRadius: "50px",
              textTransform: "none",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#ffc107",
              },
            }}
          >
            To Explore our Services
          </Button>
        </NavLink>
      </div>
    </Box>
  );
};

export default PortfolioSection;
