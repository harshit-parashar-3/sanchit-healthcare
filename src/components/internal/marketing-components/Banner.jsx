import { Container, Typography } from "@mui/material";
import React from "react";

const Banner = ({ selectedCategory }) => {
  return (
    <div className="banner">
      <Container maxWidth="xl">
        <Typography className="heading">{selectedCategory}</Typography>
      </Container>
    </div>
  );
};

export default Banner;
