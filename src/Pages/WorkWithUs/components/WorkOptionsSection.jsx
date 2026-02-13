// src/pages/WorkWithUs/components/WorkOptionsSection.jsx

import { Section, Container, Heading, Text } from "@/components/ui";
import { workOptions } from "../../../data/workOptions";
import { WorkOptionCard } from "../../../components/domain/WorkOption";

const WorkOptionsSection = () => {
  return (
    <Section variant="light">
      <Container>

        <div className="mb-12 space-y-4">
          <Heading level="h2">
            Ways to Engage
          </Heading>

          <Text>
            We selectively engage in partnerships, collaborations, and
            professional relationships that align with our philosophy and
            long-term goals.
          </Text>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {workOptions.map((option) => (
            <WorkOptionCard key={option.title} option={option} />
          ))}
        </div>

      </Container>
    </Section>
  );
};

export default WorkOptionsSection;
