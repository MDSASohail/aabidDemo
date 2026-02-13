import { Section, Container, Heading, Text } from "@/components/ui";
const WhatWeAreNotSection = () => {
  return (
    <Section variant="light">
      <div className="max-w-5xl mx-auto px-6">
        <Heading className=" mb-6">
          What Aabid.co Is Not
        </Heading>

        <ul className="space-y-4 text-gray-700 text-base md:text-lg list-disc pl-6">
          <li>We are not a service agency or freelance platform.</li>
          <li>We are not a short-term profit-driven organization.</li>
          <li>We do not directly sell products or services.</li>
          <li>We are not built on hype, trends, or shortcuts.</li>
        </ul>
      </div>
    </Section>
  );
};

export default WhatWeAreNotSection;
