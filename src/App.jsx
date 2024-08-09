import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import InvoiceanMarketing from "./components/pages/marketing-website/index";
import AOS from "aos";
import { usePageTracking } from "./hooks/usePageTracking";
import AboutInvoicean from "./components/pages/marketing-website/AboutInvoicean";
import ServiceInvoicean from "./components/pages/marketing-website/ServiceInvoicean";
import TourInvnoicean from "./components/pages/marketing-website/TourInvnoicean";
import Privacy from "./components/pages/marketing-website/Privacy";
import TermsAndConditions from "./components/pages/marketing-website/TermsAndConditions";
import DataDeletionInstructions from "./components/pages/marketing-website/DataDeletionInstructions";
import ContactPage from "./components/pages/marketing-website/ContactPage";
import Category from "./components/internal/marketing-components/categoryPages/Category";

const App = () => {
  usePageTracking();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<InvoiceanMarketing />} />
        <Route path="/aboutus" element={<AboutInvoicean />} />
        <Route path="/category" element={<ServiceInvoicean />} />
        <Route path="/invoicean-tour" element={<TourInvnoicean />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal/privacy-policy" element={<Privacy />} />
        <Route
          path="/legal/terms-and-conditions"
          element={<TermsAndConditions />}
        />
        <Route
          path="/legal/data-deletion-instruction"
          element={<DataDeletionInstructions />}
        />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
    </>
  );
};

export default App;
