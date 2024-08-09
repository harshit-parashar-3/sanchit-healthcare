import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MarketingHeader = ({ content }) => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let timer;

    const handleMouseMove = () => {
      setIsVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => setIsVisible(false), 2000);
    };

    const handleMouseIdle = () => {
      clearTimeout(timer);
      setIsVisible(false);
    };

    const timeout = setTimeout(handleMouseIdle, 2000);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseIdle);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timer);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseIdle);
    };
  }, []);

  const getButtonClassName = (hash) => {
    return location.hash === hash ? "button button-primary" : "button";
  };

  return (
    <>
      {isVisible && (
        <Box className="sendInvoice-box">
          <Container maxWidth="xl">
            <Box className="sendInvoice-popup">
              <Typography className="content">
                {content}
                <span className="text-primary">
                  {" "}
                  Sanchit Healthcare LLP
                </span> -{" "}
                {/* <span className="text-display free-content">its free</span> */}
              </Typography>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Box
                  component={Link}
                  to="/"
                  className={`scrollNavigationBtn ${getButtonClassName("/")}`}
                >
                  Home
                </Box>
                <Link
                  to="/aboutus"
                  className={`scrollNavigationBtn ${getButtonClassName(
                    "#about"
                  )}`}
                >
                  About
                </Link>
                <Link
                  to="/category"
                  className={`scrollNavigationBtn ${getButtonClassName(
                    "/category"
                  )}`}
                >
                  Category
                </Link>
                <Link to="/contact" className={`scrollNavigationBtn`}>
                  Contact
                </Link>
              </Stack>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};

export default MarketingHeader;
