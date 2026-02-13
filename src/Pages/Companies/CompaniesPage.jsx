// src/pages/Companies/CompaniesPage.jsx

import {
  CompaniesIntroSection,
  CompaniesGridSection,
} from "./components";

const CompaniesPage = () => {
  return (
    <main className="bg-white text-gray-900">
      <CompaniesIntroSection />
      <CompaniesGridSection />
    </main>
  );
};

export default CompaniesPage;

