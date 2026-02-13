// src/pages/Clients/components/ClientsGridSection.jsx

import { Section, Container, Heading, Text } from "@/components/ui";
import { clients } from "../../../data/clients";
import { ClientCard } from "../../../components/domain/Client";

const ClientsGridSection = () => {
  return (
    <Section variant="light">
      <Container>

        <div className="mb-12 space-y-4">
          <Heading level="h2">
            Institutional Relationships
          </Heading>

          <Text>
            Our collaborations reflect a multi-sector approach focused on safety,
            technology, education, media, and advisory frameworks.
          </Text>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>

      </Container>
    </Section>
  );
};

export default ClientsGridSection;
