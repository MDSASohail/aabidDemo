// src/components/domain/Contact/ContactItem.jsx

import { Heading, Text } from "@/components/ui";

const ContactItem = ({ item }) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg flex flex-col gap-2">
      <Heading level="h3" className="text-base">
        {item.label}
      </Heading>

      {item.link ? (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="text-gray-900 font-medium hover:underline"
        >
          {item.value}
        </a>
      ) : (
        <Text variant="muted">{item.value}</Text>
      )}
    </div>
  );
};

export default ContactItem;
