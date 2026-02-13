// src/pages/Home/HomePage.jsx

import {
  HeroSection,
  WhatWeAreSection,
  CompaniesPreviewSection,
  PhilosophySection,
  FounderNoteSection,
  ClosingStatementSection
} from "./components";
import ClientsPreviewSection from "./components/ClientsPreviewSection";
import FocusAreasPreviewSection from "./components/FocusAreasPreviewSection";



const HomePage = () => {
  return (
    <main className="bg-white text-gray-900">
      <HeroSection />
      <WhatWeAreSection />
      <CompaniesPreviewSection />
      <ClientsPreviewSection />
      <FocusAreasPreviewSection/>
      <PhilosophySection />
      <FounderNoteSection />
      <ClosingStatementSection />
    </main>
  );
};

export default HomePage;




// import { Section, Container, Heading, Text, Button } from "../../../components/ui";

// const HeroSection = () => {
//   return (
//     <Section variant="dark">
//       <Container className="py-20 space-y-6">
//         <Heading level="h1">
//           Building responsible businesses for a complex world.
//         </Heading>

//         <Text variant="light">
//           Aabid.co is a parent company that builds and oversees ventures across
//           safety, technology, media, education, and advisory.
//         </Text>

//         <div className="flex gap-4 flex-wrap">
//           <Button variant="primary">Explore Our Companies</Button>
//           <Button variant="secondary">Founder’s Vision</Button>
//         </div>
//       </Container>
//     </Section>
//   );
// };

// export default HeroSection;

