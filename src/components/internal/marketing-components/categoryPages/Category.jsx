import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CategorySelection from "./CategorySelection";
import CategoryList from "./CatogoryList";
import MarketingHeader from "../../layout/MarketingHeader";
import { UseScrollTop } from "../../../../hooks/useScrolltoTop";
import BannerSection from "../BannerSection";

const Category = () => {
  UseScrollTop();
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category);

  const handleSelectCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  return (
    <Box>
      <MarketingHeader />
      <BannerSection heading={selectedCategory?.toUpperCase()} />

      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <CategorySelection
              onSelectCategory={handleSelectCategory}
              selectedCategory={selectedCategory}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <CategoryList category={selectedCategory} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Category;
