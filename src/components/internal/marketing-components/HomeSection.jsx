import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { CustomButton } from "../../shared/CustomButton";

const HomeSection = () => {
  return (
    <Box id="home">
      <Box className="home-section">
        <Container maxWidth="xl">
          <Box className="home-wrapper">
            <Box className="advertisement-content">
              <Typography className="content-heading">
                <span className="highlighted-heading">
                  Welcome to Sanchit Healthcare LLP
                </span>{" "}
                <br />
                <span style={{ fontWeight: "normal", fontSize: "2rem" }}>
                  Best Pathology Machine | Laboratory | Pathology | Medical
                  Equipment Supplier in Gwalior
                </span>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomeSection;
