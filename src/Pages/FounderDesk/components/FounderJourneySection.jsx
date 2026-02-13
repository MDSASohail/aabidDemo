import { journeyPoints } from "../data/journeyPoints";
import { Heading, Container, Section} from "../../../components/ui"

const FounderJourneySection = () => {
  return (
    <Section >
      <Container >

        <Heading className="mb-10">
          Journey & Learning
        </Heading>

        <div className="space-y-8">
          {journeyPoints.map((item) => (
            <div
              key={item.title}
              className="p-6 border border-gray-200 rounded-lg"
            >
              <Heading level="h3">
                {item.title}
              </Heading>
              <p className="text-gray-700 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
};

export default FounderJourneySection;
