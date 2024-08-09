import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { PopupButton } from "react-calendly";

const FAQSection = () => {
  return (
    <>
      <Box className="FAQ-section">
        <Container maxWidth="xl">
          <Box className="FAQ-wrapper" data-aos="fade-up">
            <Grid container>
              <Grid item xs={12} sm={10}>
                <Typography className="heading">
                  Partner with Sanchit Healthcare for Customized Laboratory
                  Solutions!
                </Typography>
                <Typography className="subheading mt-18">
                  At Sanchit Healthcare, we recognize that every lab has unique
                  needs. That’s why we offer personalized solutions designed to
                  fit seamlessly with your specific requirements. From advanced
                  pathology machines to custom laboratory equipment, our
                  tailored services enhance your lab’s productivity and
                  efficiency. Partner with us to develop bespoke solutions that
                  drive precision and success in your operations. Let’s work
                  together to create a laboratory environment that meets your
                  exact needs and fosters mutual growth.
                </Typography>

                <PopupButton
                  url="https://calendly.com/sanchitHealthcare/support"
                  text="Schedule a Meeting"
                  color="#0069ff"
                  textColor="#ffffff"
                  rootElement={document.getElementById("root")}
                  className="button marketingButton mt-30"
                />
                <Typography className="subheading mt-30">
                  Schedule a meeting with our experts to discuss how our
                  tailored laboratory equipment can better serve your unique
                  needs. Take the first step towards optimizing your lab’s
                  efficiency and precision with personalized solutions designed
                  just for you.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} />
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FAQSection;
