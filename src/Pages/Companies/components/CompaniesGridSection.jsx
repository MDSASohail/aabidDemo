// src/pages/Companies/components/CompaniesGridSection.jsx
import { Section, Container, Heading,  } from "@/components/ui";
import {companies} from '../../../data/companies'
import {CompanyCard} from '../../../components/domain/Company'


const CompaniesGridSection = () => {
  return (
    <Section >
      <Container >

        <header className="mb-12">
          <Heading >
            Ventures Under Aabid.co
          </Heading>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Our portfolio reflects a multi-sector approach focused on building sustainable businesses.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <CompanyCard key={company.name} company={company} />
          ))}
        </div>

      </Container>
    </Section>
  );
};

export default CompaniesGridSection;
