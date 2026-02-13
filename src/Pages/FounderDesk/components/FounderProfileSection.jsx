
import {Text, Heading, Container, Section} from "../../../components/ui"

const FounderProfileSection = () => {
  return (
    <Section >
      <Container className=" grid gap-12 md:grid-cols-2 items-center">

        <div>
          <Heading className=" mb-6">
            About the Founder
          </Heading>
          <Text className=" leading-relaxed mb-4">
            The journey behind Aabid.co is rooted in a deep interest in systems,
            technology, safety, and institutional thinking. The focus has always
            been on building structures that endure beyond individuals.
          </Text>
          <Text className=" leading-relaxed">
            Rather than chasing short-term success, the goal has been to
            understand how meaningful businesses are created, governed, and
            scaled responsibly over time.
          </Text>
        </div>

        {/* Image Placeholder */}
        <div className="w-full h-72 bg-gray-200 rounded-lg"></div>

      </Container>
    </Section>
  );
};

export default FounderProfileSection;
