// src/pages/Clients/ClientsPage.jsx

import {
  ClientsIntroSection,
  ClientsGridSection,
} from "./components";

const ClientsPage = () => {
  return (
    <main className="bg-white text-gray-900">
      <ClientsIntroSection />
      <ClientsGridSection />
    </main>
  );
};

export default ClientsPage;
