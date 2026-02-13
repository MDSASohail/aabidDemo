// src/pages/Home/components/CompaniesPreviewSection.jsx


import {companies} from '../../../data/companies'
import {CompanyCard} from '../../../components/domain/Company'
import { Heading, Container, Section, Text} from "../../../components/ui"

const CompaniesPreviewSection = () => {
  return (
    <Section >
      <Container >

        <header className="mb-12">
          <Heading >
            Our Partners
          </Heading>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Each company under Aabid.co operates independently with its own mission and leadership.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {companies.slice(0, 3).map((company) => (
            <CompanyCard key={company.name} company={company} />
          ))}
        </div>

      </Container>
    </Section>
  );
};

export default CompaniesPreviewSection;
