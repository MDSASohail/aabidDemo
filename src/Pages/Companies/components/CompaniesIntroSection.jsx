import { Section, Container, Heading, Text } from "@/components/ui";

const CompaniesIntroSection = () => {
  return (
    <section className="bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        
        <Heading level="h1" className="leading-tight">Our Partners</Heading>
        
        
        <Text variant="light" className="mt-6 max-w-3xl">Each company under Aabid.co operates independently with its own leadership,
          mission, and market focus — while sharing a common philosophy of long-term,
          responsible growth.</Text>
      </div>
    </section>
  );
};

export default CompaniesIntroSection;
