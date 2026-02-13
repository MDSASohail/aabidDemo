import { Section, Container, Heading, Text } from "@/components/ui";
import { visionPoints } from "../data/visionPoints";

const VisionSection = () => {
  return (
    <Section >
      <Container>
        
        <Heading className="mb-10"> Our Long-Term Vision</Heading>

        <div className="grid gap-6 md:grid-cols-2">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg"
            >
              <Text> {point}</Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default VisionSection;
