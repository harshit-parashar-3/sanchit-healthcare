import React from "react";
import MarketingHeader from "../../internal/layout/MarketingHeader";
import BannerSection from "../../internal/marketing-components/BannerSection";
import FAQSection from "../../internal/marketing-components/FAQSection";
import TestimonialSection from "../../internal/marketing-components/TestimonialSection";
import MarketingFooter from "../../internal/layout/MarketingFooter";
import { Box, Container, Typography, Link } from "@mui/material";
import { UseScrollTop } from "../../../hooks/useScrolltoTop";
import PlaceIcon from "@mui/icons-material/Place";
const ContactPage = () => {
  UseScrollTop();
  return (
    <>
      <MarketingHeader
        content={"Return to the "}
        url={"/"}
        buttonTitle={"Return to the Home page"}
      />
      <BannerSection
        heading="We're looking forward to hearing from you."
        content="An entire team is committed to enhancing your experience at no cost. But don't just take our word for it—reach out to us using the email address below and experience it firsthand."
      />
      <Box className="contact-section">
        <Container maxWidth="xl">
          <Box className="contact-wrapper mt-30 ">
            <Box className="primary-box-contact mt-30">
              <Typography
                variant="body1"
                color="initial"
                className="heading"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <PlaceIcon />
                <span style={{ fontSize: "1.5rem", marginLeft: "0.5rem" }}>
                  Address
                </span>
              </Typography>
              <Typography className="content mt-18">
                Our team is available Monday through Friday, from 9:00 AM to
                5:00 PM Indian Standard Time (IST). We will address your
                requests promptly.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box className="contact-section">
        <Container maxWidth="xl">
          <Box className="contact-wrapper mt-30 ">
            <Typography variant="body1" color="initial" className="heading">
              📩 How can you reach our Support team?
            </Typography>
            <Typography className="content mt-18">
              If you encounter technical issues that aren't covered in our
              knowledge base, our dedicated support agents are ready to assist
              you. Before reaching out, we recommend checking our comprehensive
              documentation, which is frequently updated with the latest tips
              and solutions.
            </Typography>
            <Typography className="content mt-18">
              For additional help, use the 'Contact Us' button at the end of
              each article, or email us directly at
              <Link
                href="mailto:support@sanchitHealthcare.com"
                underline="none"
              >
                support@sanchitHealthcare.com
              </Link>
            </Typography>

            <Box className="primary-box-contact mt-30">
              <Typography variant="body1" color="initial" className="heading">
                Working hours
              </Typography>
              <Typography className="content mt-18">
                Our team is available Monday through Friday, from 9:00 AM to
                5:00 PM Indian Standard Time (IST). We will address your
                requests promptly.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <FAQSection />
      <TestimonialSection />
      <MarketingFooter />
    </>
  );
};

export default ContactPage;
