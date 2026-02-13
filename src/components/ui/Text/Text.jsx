// src/components/ui/Text/Text.jsx

const Text = ({ children, variant = "normal", className = "" }) => {
  const styles = {
    normal: "text-gray-700 text-base md:text-lg",
    muted: "text-gray-600 text-sm",
    light: "text-gray-300 text-base md:text-lg",
  };

  return (
    <p className={`${styles[variant]} ${className}`}>
      {children}
    </p>
  );
};

export default Text;
