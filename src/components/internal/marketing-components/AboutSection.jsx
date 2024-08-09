import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import sanchitHealthcareLogo from "../../..//assets/logo/logo-dark.jpeg";

const AboutSection = () => {
  return (
    <>
      <Box className="about-section" id="about">
        <Container maxWidth="xl">
          <Box className="about-wrapper">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box className="invoice-right-section" data-aos="fade-up">
                  <Box className="sanchitHealthcare-logo">
                    <Box
                      component="img"
                      src={sanchitHealthcareLogo}
                      className="logo"
                      alt="about sanchitHealthcare logo"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className="Invoicen-details" data-aos="fade-up">
                  <Typography className="heading">
                    Know more about us
                  </Typography>
                  <Typography className="display-heading text-display">
                    Welcome to Sanchit Healthcare LLP.
                  </Typography>
                  <Typography className="subheading mt-18">
                    At Sanchit Healthcare LLP, we are dedicated to providing the
                    best in pathology and medical equipment to support
                    healthcare excellence. Based in Gwalior, we specialize in
                    offering top-of-the-line pathology machines and laboratory
                    equipment designed to meet the highest standards of accuracy
                    and reliability.
                  </Typography>
                  <Typography
                    className="subheading mt-18"
                    sx={{ fontWeight: "bold", fontSize: "1.5rem !important" }}
                  >
                    Why Choose Us?
                  </Typography>
                  <Typography className="subheading mt-18">
                    <strong>Comprehensive Range:</strong> From advanced
                    pathology machines to essential laboratory tools, our
                    extensive product lineup ensures you find the equipment that
                    perfectly fits your needs.
                  </Typography>
                  <Typography className="subheading mt-18">
                    <strong>Quality Assurance:</strong> We source our products
                    from reputable manufacturers, guaranteeing that every piece
                    of equipment meets stringent quality and performance
                    standards.
                  </Typography>
                  <Typography className="subheading mt-18">
                    <strong>Expert Support:</strong> Our team of professionals
                    is here to offer personalized support and guidance, helping
                    you select the right solutions for your medical or
                    laboratory requirements.
                  </Typography>
                  <Typography className="subheading mt-18">
                    <strong>Timely Delivery:</strong> We understand the
                    importance of prompt service. That’s why we ensure timely
                    delivery of all orders, so you can focus on what matters
                    most—providing excellent patient care.
                  </Typography>
                  <Typography className="subheading mt-30 text-primary">
                    Your Trusted Partner for Advanced Laboratory Equipment
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutSection;
