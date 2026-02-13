// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";

// Pages
import HomePage from "@/Pages/Home/HomePage";
import AboutPage from "@/Pages/About/AboutPage";
import CompaniesPage from "@/Pages/Companies/CompaniesPage";
import FocusAreasPage from "@/Pages/FocusAreas/FocusAreasPage";
import InsightsPage from "@/Pages/Insights/InsightsPage";
import WorkWithUsPage from "@/Pages/WorkWithUs/WorkWithUsPage";
import ContactPage from "@/Pages/Contact/ContactPage";
import FounderDesPage from "@/Pages/FounderDesk/FounderDeskPage";
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
