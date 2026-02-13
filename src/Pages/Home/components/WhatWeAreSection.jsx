// src/pages/Home/components/WhatWeAreSection.jsx
import { Heading, Container, Section} from "../../../components/ui"

import { pillars } from "../data/pillars";

const WhatWeAreSection = () => {
  return (
    <Section >
      <Container>

        <header className="mb-12">
          <Heading >
            What We Are Building
          </Heading>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Aabid.co exists to create, support, and scale independent businesses with clarity,
            integrity, and discipline.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-sm transition"
            >
              <Heading level="h3" className="mb-2">{pillar.title}</Heading>
              <p className="text-gray-600 text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
};

export default WhatWeAreSection;
