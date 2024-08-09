import React from "react";
import MarketingHeader from "../../internal/layout/MarketingHeader";
import HomeSection from "../../internal/marketing-components/HomeSection";
import AboutSection from "../../internal/marketing-components/AboutSection";
import ServiceSection from "../../internal/marketing-components/ServiceSection";
import BannerSection from "../../internal/marketing-components/BannerSection";
import AISection from "../../internal/marketing-components/AISection";
import FAQSection from "../../internal/marketing-components/FAQSection";
import TestimonialSection from "../../internal/marketing-components/TestimonialSection";
import MarketingFooter from "../../internal/layout/MarketingFooter";
import useSmoothScroll from "../../../hooks/useSmoothScroll";

const InvoiceanMarketing = () => {
  useSmoothScroll();
  const buttonTitle = "Create Invoice";
  const url = "/";
  const content = "Welcome to";

  return (
    <>
      <MarketingHeader content={content} url={url} buttonTitle={buttonTitle} />

      <HomeSection />

      <AboutSection />

      <ServiceSection />

      <BannerSection
        heading="Your Trusted Partner for Advanced Laboratory Equipment"
        content="We provide top-tier, reliable laboratory equipment that ensures precision and efficiency. Trust us for cutting-edge solutions that elevate your lab’s performance and accuracy."
      />
      <TestimonialSection />
      <FAQSection />
      <MarketingFooter />
    </>
  );
};

export default InvoiceanMarketing;
