// src/components/ui/Section/Section.jsx

const Section = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "py-20 bg-white",
    light: "py-20 bg-gray-50",
    dark: "py-20 bg-gray-950 text-white",
  };

  return (
    <section className={`${variants[variant]} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
