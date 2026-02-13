// src/components/domain/Client/ClientCard.jsx

import { Heading, Text } from "@/components/ui";

const ClientCard = ({ client }) => {
  return (
    <article className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition flex flex-col gap-3">
      
      <Heading level="h3" className="text-base">
        {client.name}
      </Heading>

      <span className="text-xs font-medium text-gray-500">
        Sector: {client.sector}
      </span>

      <Text variant="muted">
        {client.service}
      </Text>

    </article>
  );
};

export default ClientCard;
