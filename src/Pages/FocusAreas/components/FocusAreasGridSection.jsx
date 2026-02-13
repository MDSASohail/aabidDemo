import { focusAreas } from "../../../data/focusAreas";
import { FocusAreaCard } from "../../../components/domain/FocusArea";
import {Text, Heading, Container, Section} from "../../../components/ui"
const FocusAreasGridSection = () => {
  return (
    <Section variant="light" >
      <Container >

        <header className="mb-12">
          <Heading className="text-2xl md:text-4xl font-semibold">
            Strategic Domains
          </Heading>
          <Text variant="muted" className="mt-4 max-w-2xl"> 
            Our focus areas represent the sectors where we build knowledge,
            systems, and long-term business capabilities.
          </Text>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <FocusAreaCard key={area.title} area={area} />
          ))}
        </div>

      </Container>
    </Section>
  );
};

export default FocusAreasGridSection;
