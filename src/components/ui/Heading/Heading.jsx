// src/components/ui/Heading/Heading.jsx

const Heading = ({ level = "h2", children, className = "" }) => {
  const styles = {
    h1: "text-3xl md:text-5xl font-semibold leading-tight",
    h2: "text-2xl md:text-4xl font-semibold",
    h3: "text-lg md:text-xl font-semibold",
  };

  const Tag = level;

  return (
    <Tag className={`${styles[level]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;
