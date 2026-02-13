// src/components/layout/Header/Logo.jsx

import { Link } from "react-router-dom";
import logo from '../../../assets/title.jpeg'

const Logo = () => {
  return (
    <Link to="/" className="text-xl font-semibold tracking-wide">
      <img src={logo} alt="Aabid" className="w-16"/>
    </Link>
  );
};

export default Logo;
