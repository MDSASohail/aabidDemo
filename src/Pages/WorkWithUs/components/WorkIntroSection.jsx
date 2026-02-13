// src/pages/WorkWithUs/components/WorkIntroSection.jsx

import { Section, Container, Heading, Text } from "@/components/ui";

const WorkIntroSection = () => {
  return (
    <Section variant="dark">
      <Container className=" space-y-6">
        <Heading level="h1">
          Work With Us
        </Heading>

        <Text variant="light">
          Aabid.co collaborates with individuals and organizations that share
          a long-term vision, ethical mindset, and commitment to building
          meaningful institutions.
        </Text>
      </Container>
    </Section>
  );
};

export default WorkIntroSection;
