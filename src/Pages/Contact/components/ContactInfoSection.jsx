// src/pages/Contact/components/ContactInfoSection.jsx

import { Section, Container, Heading, Text } from "@/components/ui";
import { contactInfo } from "../../../data/contactInfo";
import { ContactItem } from "../../../components/domain/Contact";

const ContactInfoSection = () => {
  return (
    <Section variant="light">
      <Container>

        <div className="mb-12 space-y-4">
          <Heading level="h2">
            Official Communication
          </Heading>

          <Text>
            Aabid.co maintains structured communication channels to ensure
            clarity, professionalism, and accountability.
          </Text>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contactInfo.map((item) => (
            <ContactItem key={item.label} item={item} />
          ))}
        </div>

      </Container>
    </Section>
  );
};

export default ContactInfoSection;
