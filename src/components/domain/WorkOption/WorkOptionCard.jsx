// src/components/domain/WorkOption/WorkOptionCard.jsx

import { Heading, Text, Button } from "@/components/ui";

const WorkOptionCard = ({ option }) => {
  return (
    <article className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition flex flex-col justify-between gap-4">
      <div>
        <Heading level="h3" className="mb-2">
          {option.title}
        </Heading>

        <Text variant="muted">
          {option.description}
        </Text>
      </div>

      <Button variant="secondary" className="self-start mt-2">
        Learn More →
      </Button>
    </article>
  );
};

export default WorkOptionCard;
