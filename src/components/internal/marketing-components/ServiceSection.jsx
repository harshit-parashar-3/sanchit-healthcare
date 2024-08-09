import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { servicesData } from "../../../constant";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  return (
    <>
      <Box className="service-section" id="category">
        <Container maxWidth="xl">
          <Box className="service-wrapper">
            <Typography
              className="text-display heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Discover the Power of Sanchit Healthcare—Elevate Your Diagnostic
              Precision Today!
            </Typography>
            <Typography
              className="subheading mt-18"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Sanchit Healthcare provides a complete range of state-of-the-art
              pathology and laboratory equipment designed to enhance diagnostic
              accuracy and efficiency. Explore our offerings to see why we're
              the trusted choice for healthcare professionals.
            </Typography>
            <Grid container spacing={{ xs: 2, sm: 4 }} className="mt-30">
              {servicesData?.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Link to={service.url} className="Links">
                    <Box
                      className="serviceCard"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <Box className="card-icon-container">{service?.icon}</Box>
                      <Typography className="content-heading mt-18">
                        {service?.heading}
                      </Typography>
                      <Typography className="content-subheading">
                        {service?.subheading}
                      </Typography>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ServiceSection;
