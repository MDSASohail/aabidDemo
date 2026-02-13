// src/pages/Home/components/ClientsPreviewSection.jsx

import { Section, Container, Heading, Text } from "@/components/ui";
import { clients } from "@/data/clients";
import { ClientCard } from "@/components/domain/Client";

const ClientsPreviewSection = () => {
  return (
    <Section variant="light">
      <Container>
        
        {/* Section Heading */}
        <div className="mb-12 space-y-4">
          <Heading level="h2">
            Clients We Have Served
          </Heading>

          <Text>
            Organizations across sectors that have benefited from our safety,
            technology, advisory, and capacity-building initiatives.
          </Text>
        </div>

        {/* Clients Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {clients.slice(0, 6).map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>

      </Container>
    </Section>
  );
};

export default ClientsPreviewSection;
