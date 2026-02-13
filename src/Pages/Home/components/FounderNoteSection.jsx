import { Heading, Container, Section, Text} from "../../../components/ui"

const FounderNoteSection = () => {
  return (
    <Section variant="light" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">

        <div>
          <Heading className=" mb-4">
            From the Founder
          </Heading>
          <p className="text-gray-700 mb-6">
            Aabid.co reflects my long-term commitment to building meaningful businesses across sectors
            that matter. The goal is not rapid expansion, but thoughtful growth.
          </p>
          <button className="text-gray-900 font-medium hover:underline">
            Read the Founder’s Desk →
          </button>
        </div>

        <div className="w-full h-64 bg-gray-200 rounded-lg"></div>

      </div>
    </Section>
  );
};

export default FounderNoteSection;
