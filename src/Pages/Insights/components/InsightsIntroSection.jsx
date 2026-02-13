import { Section, Container, Heading, Text } from "@/components/ui";

const InsightsIntroSection = () => {
  return (
    <Section variant="dark">
      <Container className="py-20 space-y-6">
        <Heading level="h1">
          Insights
        </Heading>

        <Text variant="light">
          Reflections, observations, and frameworks on building businesses,
          systems, and institutions across sectors.
        </Text>
      </Container>
    </Section>
  );
};

export default InsightsIntroSection;
