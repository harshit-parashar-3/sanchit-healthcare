import {
  Box,
  Container,
  Divider,
  Grid,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import React from "react";
import sanchitHealthcareLogo from "../../..//assets/logo/logo-dark.jpeg";
import { Link } from "react-router-dom";
import { footerLinksGeneral, footerLinksLegal } from "../../../constant";

const MarketingFooter = () => {
  return (
    <>
      <Box className="footer-section">
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Box className="footer-logo mb-30">
                <Link to="/">
                  <Box
                    component="img"
                    src={sanchitHealthcareLogo}
                    className="logo"
                    alt="about sanchitHealthcare logo"
                  />
                </Link>
              </Box>
              <Typography className="content">
                We provide top-tier, reliable laboratory equipment that ensures
                precision and efficiency. Trust us for cutting-edge solutions
                that elevate your lab’s performance and accuracy.
              </Typography>
            </Grid>
            <Grid item xs={0} sm={6} md={2} />

            <Grid item xs={12} sm={6} md={3}>
              <Box className="footer-links mt-18">
                <Typography className="heading">General</Typography>
                <MenuList>
                  {footerLinksGeneral.map((link, index) => (
                    <MenuItem
                      key={index}
                      component={Link}
                      to={link.path}
                      className="links"
                    >
                      {link.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="footer-links mt-18">
                <Typography className="heading">Legal</Typography>
                <MenuList>
                  {footerLinksLegal.map((link, index) => (
                    <MenuItem
                      key={index}
                      component={Link}
                      to={link.path}
                      className="links"
                    >
                      {link.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Box>
            </Grid>
          </Grid>
          <Divider className="mb-18 mt-18 divider" />
          <Typography className="footer-content" textAlign="end">
            Copyright © 2024 Sanchit Healthcare LLP
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default MarketingFooter;
