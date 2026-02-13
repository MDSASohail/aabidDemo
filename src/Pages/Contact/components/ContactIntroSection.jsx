// src/pages/Contact/components/ContactIntroSection.jsx

import { Section, Container, Heading, Text } from "@/components/ui";

const ContactIntroSection = () => {
  return (
    <Section variant="dark">
      <Container className=" space-y-6">
        <Heading level="h1">
          Contact
        </Heading>

        <Text variant="light">
          For official communication, partnerships, and professional inquiries,
          please use the channels listed below.
        </Text>
      </Container>
    </Section>
  );
};

export default ContactIntroSection;
