import React from "react";
import BannerSection from "./../../internal/marketing-components/BannerSection";
import AboutSection from "../../internal/marketing-components/AboutSection";
import MarketingHeader from "../../internal/layout/MarketingHeader";
import MarketingFooter from "../../internal/layout/MarketingFooter";
import FAQSection from "../../internal/marketing-components/FAQSection";
import TestimonialSection from "../../internal/marketing-components/TestimonialSection";
import { UseScrollTop } from "../../../hooks/useScrolltoTop";

const AboutsanchitHealthcare = () => {
  UseScrollTop();
  return (
    <>
      <MarketingHeader
        content={"Return to the "}
        url={"/"}
        buttonTitle={"Return to the Home page"}
      />
      <BannerSection
        heading="About Us."
        content="
We provide top-tier, reliable laboratory equipment that ensures precision and efficiency. Trust us for cutting-edge solutions that elevate your lab’s performance and accuracy."
      />
      <AboutSection />
      <FAQSection />
      <TestimonialSection />
      <MarketingFooter />
    </>
  );
};

export default AboutsanchitHealthcare;
