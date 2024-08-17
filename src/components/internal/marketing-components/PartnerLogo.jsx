import { Grid, Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
const PartnerLogo = () => {
  const logos = [
    "data:image/png;base64,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",
    "logo2.png",
    "logo3.png",
    "logo4.png",
    "logo5.png",
    // Add more logo file names as needed
  ];

  return (
    <div className="logo-scroller">
      <Marquee>
        <Typography className="heading-content text-display partner-text ">
          Our Partner:-
        </Typography>
        <Grid container spacing={2}>
          {logos.map((logo, index) => (
            <Grid item xs={2}>
              <img
                key={index}
                src={logo}
                alt={`Company Logo ${index + 1}`}
                className="logo"
              />
            </Grid>
          ))}
        </Grid>
      </Marquee>
    </div>
  );
};

export default PartnerLogo;
