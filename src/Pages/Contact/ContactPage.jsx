// src/pages/Contact/ContactPage.jsx

import {
  ContactIntroSection,
  ContactInfoSection,
} from "./components";

const ContactPage = () => {
  return (
    <main className="bg-white text-gray-900">
      <ContactIntroSection />
      <ContactInfoSection />
    </main>
  );
};

export default ContactPage;
