// src/components/layout/Header/Header.jsx

import { Container } from "@/components/ui";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <Container className="flex items-center justify-between h-16">

        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <NavMenu />

        {/* Mobile Navigation */}
        <MobileMenu />

      </Container>
    </header>
  );
};

export default Header;
