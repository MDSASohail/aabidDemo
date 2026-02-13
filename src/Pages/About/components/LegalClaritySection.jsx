import {Section, Container, Heading, Text} from '@/components/ui'


const LegalClaritySection = () => {
  return (
    <Section variant="dark">
      <Container >
        <Heading  className="mb-6">
          Structural Clarity
        </Heading >
        <Text variant="light" className="leading-relaxed" >
          Aabid.co does not directly provide commercial services. Each venture under the Aabid.co umbrella operates independently with its own identity, operations, and responsibilities. This structure ensures strategic clarity, legal separation, and operational focus.
        </Text>
      </Container>
    </Section>
  );
};

export default LegalClaritySection;

// section className="py-20 bg-gray-950 text-white"
// div container className="max-w-5xl mx-auto px-6"
// h2 className="text-2xl md:text-4xl font-semibold mb-6"
//p className="text-gray-300 leading-relaxed text-base md:text-lg"
