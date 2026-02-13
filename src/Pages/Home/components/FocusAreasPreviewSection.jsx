// src/pages/Home/components/FocusAreasPreviewSection.jsx

import { focusAreas } from "../../../data/focusAreas";
import { FocusAreaCard } from "../../../components/domain/FocusArea";
import { Heading, Container, Section, Text} from "../../../components/ui"

const FocusAreasPreviewSection = () => {
  return (
    <Section >
      <div className="max-w-6xl mx-auto px-6">

        <header className="mb-12">
          <Heading >
            Our Focus Areas
          </Heading>
          <p className="mt-4 text-gray-600 max-w-2xl">
            We concentrate on sectors that enable responsible growth and
            long-term institutional development.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.slice(0, 3).map((area) => (
            <FocusAreaCard key={area.title} area={area} />
          ))}
        </div>

      </div>
    </Section>
  );
};

export default FocusAreasPreviewSection;
