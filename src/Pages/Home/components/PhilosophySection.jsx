import { Heading,  Section, Text} from "../../../components/ui"

const PhilosophySection = () => {
  return (
    <Section >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <Heading className="mb-6">
          Our Philosophy
        </Heading>

        <Text className=" leading-relaxed ">
          Aabid.co was created with a simple belief: strong institutions are built through clarity
          of purpose, disciplined execution, and respect for people. We focus on creating systems
          that outlast individuals and businesses that create value beyond profit.
        </Text>

      </div>
    </Section>
  );
};

export default PhilosophySection;
