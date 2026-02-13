// src/components/domain/Insight/InsightCard.jsx

import InsightMeta from "./InsightMeta";
import { Heading, Text } from "@/components/ui";

const InsightCard = ({ insight }) => {
  return (
    <article className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition flex flex-col gap-4">
      <InsightMeta category={insight.category} date={insight.date} />

      <Heading level="h3">
        {insight.title}
      </Heading>

      <Text variant="muted">
        {insight.summary}
      </Text>

      <span className="text-sm font-medium text-gray-900 hover:underline cursor-pointer">
        Read more →
      </span>
    </article>
  );
};

export default InsightCard;
