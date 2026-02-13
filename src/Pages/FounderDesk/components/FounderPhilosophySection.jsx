import { philosophyPoints } from "../data/philosophyPoints";
import {Text, Heading, Container, Section} from "../../../components/ui"

const FounderPhilosophySection = () => {
  return (
    <Section variant="light">
      <Container>

        <Heading className=" mb-10">
          Core Philosophy
        </Heading>

        <div className="grid gap-6 md:grid-cols-2">
          {philosophyPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg"
            >
              < Text>
                {point}
              </Text>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
};

export default FounderPhilosophySection;
