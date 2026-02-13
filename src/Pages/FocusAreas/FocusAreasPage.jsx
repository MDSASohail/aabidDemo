// src/pages/FocusAreas/FocusAreasPage.jsx

import {
  FocusAreasIntroSection,
  FocusAreasGridSection,
} from "./components";

const FocusAreasPage = () => {
  return (
    <main className="bg-white text-gray-900">
      <FocusAreasIntroSection />
      <FocusAreasGridSection />
    </main>
  );
};

export default FocusAreasPage;
