// src/components/domain/Insight/InsightMeta.jsx

import { Text } from "@/components/ui";

const InsightMeta = ({ category, date }) => {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-500">
      <span>{category}</span>
      <span>•</span>
      <span>{new Date(date).toDateString()}</span>
    </div>
  );
};

export default InsightMeta;
