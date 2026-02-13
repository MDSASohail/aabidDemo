// src/pages/Insights/InsightsPage.jsx

import {
  InsightsIntroSection,
  InsightsGridSection,
} from "./components";

const InsightsPage = () => {
  return (
    <main className="bg-white text-gray-900">
      <InsightsIntroSection />
      <InsightsGridSection />
    </main>
  );
};

export default InsightsPage;
