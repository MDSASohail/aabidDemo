import { Section, Container, Heading, Text } from "@/components/ui";
import { insights } from "../../../data/insights";
import { InsightCard } from "../../../components/domain/Insight";

const InsightsGridSection = () => {
  return (
    <Section variant="light">
      <Container>

        <div className="mb-12 space-y-4">
          <Heading level="h2">
            Thoughts & Essays
          </Heading>

          <Text>
            A collection of ideas and learnings across business, safety,
            technology, education, and governance.
          </Text>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>

      </Container>
    </Section>
  );
};

export default InsightsGridSection;
