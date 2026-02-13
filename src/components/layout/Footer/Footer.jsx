// src/components/layout/Footer/Footer.jsx

import { Container, Section } from "@/components/ui";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <Section variant="light">
      <Container>
        <div className="grid gap-12 md:grid-cols-2">

          {/* Brand / Description */}
          <FooterBrand />

          {/* Links */}
          <FooterLinks />

        </div>

        {/* Bottom Bar */}
        <FooterBottom />
      </Container>
    </Section>
  );
};

export default Footer;
