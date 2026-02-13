// src/pages/About/AboutPage.jsx

import {
  AboutIntroSection,
  WhatWeAreSection,
  WhatWeAreNotSection,
  VisionSection,
  OperatingModelSection,
  LegalClaritySection,
} from "./components";

const AboutPage = () => {
  return (
    <main className="bg-white text-gray-900">
      <AboutIntroSection />
      <WhatWeAreSection />
      <WhatWeAreNotSection />
      <VisionSection />
      <OperatingModelSection />
      <LegalClaritySection />
    </main>
  );
};

export default AboutPage;
