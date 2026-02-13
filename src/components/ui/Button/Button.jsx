// src/components/ui/Button/Button.jsx

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const styles = {
    primary:
      "px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition cursor-pointer",
    secondary:
      "px-6 py-3 border border-gray-400 text-gray-900 rounded-md hover:border-gray-900 transition cursor-pointer",
  };

  return (
    <button className={`${className} ${styles[variant]}  `} {...props}>
      {children}
    </button>
  );
};

export default Button;
