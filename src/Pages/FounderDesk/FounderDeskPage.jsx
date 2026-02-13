// src/pages/FounderDesk/FounderDeskPage.jsx

import {
  FounderIntroSection,
  FounderProfileSection,
  FounderPhilosophySection,
  FounderJourneySection,
  FounderVisionSection,
} from "./components";

const FounderDeskPage = () => {
  return (
    <main className="bg-white text-gray-900">
      <FounderIntroSection />
      <FounderProfileSection />
      <FounderPhilosophySection />
      <FounderJourneySection />
      <FounderVisionSection />
    </main>
  );
};

export default FounderDeskPage;
