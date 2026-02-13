import { Section, Container, Heading, Text } from "@/components/ui";
import { operatingModel } from "../data/operatingModel";


const OperatingModelSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        <Heading className="mb-10">
               How We Operate
        </Heading>

        <div className="grid gap-8 md:grid-cols-3">
          {operatingModel.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white border border-gray-200 rounded-lg"
            >
              
              
                         
              <Heading level="h3" className="mb-2">
                         {item.title}
              </Heading>
              
              <Text variant="muted">
                  {item.description}
              </Text>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingModelSection;
