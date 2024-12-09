import React, { useState, useEffect } from "react";
import Grid from "@mui/system/Grid";
import { Box, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
import {
  IconButton,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
} from "@mui/material";
import CompanyLogo from "../../../assets/images/CompanyLogo.jpg";

const Navbar = () => {
  const selectedPage = useSelector((state) => state.page.selectedPage);
  console.log(selectedPage, "selected-page");
  const theme = useTheme();
  const [isSticky, setIsSticky] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = () => {
    // If the scroll is greater than 50px, set isSticky to true
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getPageClassName = (pageName) => {
    switch (pageName) {
      case "/":
        return "home-page";
      case "/services":
        return "services-page";
      case "/contactus":
        return "contactus-page";
      default:
        return "wrong-url-page";
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMobileModeBtn = () => (
    <>
      {/* Menu Icon aligned to center */}
      <IconButton
        aria-label="menu"
        onClick={handleMenuClick}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MenuIcon style={{ color: "white" }} />
      </IconButton>

      {/* Menu with 3 buttons */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "rgba(0,30,99)",
          },
        }}
      >
        <MenuItem onClick={() => handleClose()}>
          <Button sx={{ color: "white" }}>
            <div
              className={`${
                getPageClassName(selectedPage) === "home-page"
                  ? "disabled-cls"
                  : ""
              } nav-link-wrapper`}
            >
              <NavLink to="/" end className="nav-link">
                HOME
              </NavLink>
            </div>
          </Button>
        </MenuItem>
        <MenuItem onClick={() => handleClose()}>
          <div
            className={`${
              getPageClassName(selectedPage) === "services-page"
                ? "disabled-cls"
                : ""
            } nav-link-wrapper`}
          >
            <NavLink to="/services" className="nav-link">
              SERVICES
            </NavLink>
          </div>
        </MenuItem>
        <MenuItem onClick={() => handleClose()}>
          <div
            className={`${
              getPageClassName(selectedPage) === "contactus-page"
                ? "disabled-cls"
                : ""
            } nav-link-wrapper`}
          >
            <Badge color="secondary">
              <NavLink to="/contactus" className="nav-link">
                CONTACT US
              </NavLink>
            </Badge>
          </div>
        </MenuItem>
      </Menu>
    </>
  );

  return (
    <>
      <nav
        className={`${getPageClassName(selectedPage)} navbar ${
          isSticky ? "navbar--sticky" : ""
        }`}
      >
        <div className="sub-navbar">
          {/* Title section */}
          <Box display="flex" alignItems="center" flexGrow={1}>
            <img
              src={CompanyLogo}
              alt="CompanyLogo"
              style={{
                borderRadius: "50%",
                marginRight: 8,
                width: "45px",
                height: "45px",
              }}
            />
            <Typography variant="h6" className="title-wrap" noWrap>
              DESIGN OUTSOURCING
            </Typography>
          </Box>
          {/* Nav section */}
          {/* Right side - Buttons or Menu */}
          {!isMobile ? (
            <Grid className={"content-nav-link"}>
              <div
                className={`${
                  getPageClassName(selectedPage) === "home-page"
                    ? "disabled-cls"
                    : ""
                } nav-link-wrapper`}
              >
                <NavLink to="/" end className="nav-link">
                  HOME
                </NavLink>
              </div>
              <div
                className={`${
                  getPageClassName(selectedPage) === "services-page"
                    ? "disabled-cls"
                    : ""
                } nav-link-wrapper`}
              >
                <NavLink to="/services" className="nav-link">
                  SERVICES
                </NavLink>
              </div>
              <div
                className={`${
                  getPageClassName(selectedPage) === "contactus-page"
                    ? "disabled-cls"
                    : ""
                } nav-link-wrapper`}
              >
                <Badge color="secondary">
                  <NavLink to="/contactus" className="nav-link">
                    CONTACT US
                  </NavLink>
                </Badge>
              </div>
            </Grid>
          ) : (
            renderMobileModeBtn()
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
