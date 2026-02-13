import { Section, Container, Heading, Text } from "@/components/ui";

const ClientsIntroSection = () => {

  
  
  return (
    <Section variant="dark">
      <Container className=" space-y-6">
        <Heading level="h1">
          Clients
        </Heading>

        <Text variant="light">
          Aabid.co has served organizations across multiple sectors by delivering
          safety frameworks, technical advisory, training systems, and strategic
          support tailored to their operational needs.
        </Text>
      </Container>
    </Section>
  );
};

export default ClientsIntroSection;
