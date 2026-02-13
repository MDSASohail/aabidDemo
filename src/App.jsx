// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";

// Pages
import HomePage from "@/pages/Home/HomePage";
import AboutPage from "@/pages/About/AboutPage";
import CompaniesPage from "@/pages/Companies/CompaniesPage";
import FocusAreasPage from "@/pages/FocusAreas/FocusAreasPage";
import InsightsPage from "@/pages/Insights/InsightsPage";
import WorkWithUsPage from "@/pages/WorkWithUs/WorkWithUsPage";
import ContactPage from "@/pages/Contact/ContactPage";
import FounderDesPage from "@/pages/FounderDesk/FounderDeskPage";
import { Footer } from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import ClientsPage from "./Pages/Clients/ClientsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partners" element={<CompaniesPage />} />
        <Route path="/focus-areas" element={<FocusAreasPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/work-with-us" element={<WorkWithUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/founder-desk" element={<FounderDesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
