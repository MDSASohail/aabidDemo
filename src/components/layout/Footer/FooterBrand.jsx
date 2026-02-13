// src/components/layout/Footer/FooterBrand.jsx


import { Heading, Container, Section, Text} from "../../ui"

const FooterBrand = () => {
  return (
    <div className="space-y-4">
      <Heading level="h3" className=" tracking-wide">
        AABID.CO
      </Heading>

      <Text variant="muted">
        Aabid.co is a parent company overseeing independent ventures across
        safety, technology, media, education, and advisory — built with a
        long-term, value-driven approach.
      </Text>
    </div>
  );
};

export default FooterBrand;
