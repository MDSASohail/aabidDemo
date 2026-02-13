import {Text, Heading, Container, Section} from "../../../components/ui"

const FounderIntroSection = () => {
  return (
    <Section variant="dark">
      <Container >
        <Heading level="h1" >
          Founder’s Desk
        </Heading >
        <Text variant="light" className="mt-6 max-w-3xl">
          Reflections on building institutions, learning through experience,
          and pursuing long-term, responsible growth across sectors.
        </Text>
      </Container>
    </Section>
  );
};

export default FounderIntroSection;
