import React from "react";
import ServiceSection from "../../internal/marketing-components/ServiceSection";
import MarketingHeader from "../../internal/layout/MarketingHeader";
import BannerSection from "../../internal/marketing-components/BannerSection";
import FAQSection from "../../internal/marketing-components/FAQSection";
import MarketingFooter from "../../internal/layout/MarketingFooter";
import TestimonialSection from "../../internal/marketing-components/TestimonialSection";
import { UseScrollTop } from "../../../hooks/useScrolltoTop";

const ServicesanchitHealthcare = () => {
  UseScrollTop();
  return (
    <>
      <MarketingHeader
        content={"Return to the "}
        url={"/"}
        buttonTitle={"Return to the Home page"}
      />
      <BannerSection
        heading="Categories."
        content="A brief overview of the categories"
      />
      <ServiceSection />
      <FAQSection />
      <TestimonialSection />
      <MarketingFooter />
    </>
  );
};

export default ServicesanchitHealthcare;
