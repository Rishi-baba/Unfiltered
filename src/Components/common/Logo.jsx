import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ onClick }) => {
  return (
    <Link to="/" onClick={onClick}>
      <img src="/logo.png" alt="UNFT Logo" className="w-full cursor-pointer" />
    </Link>
  );
};

export default Logo;
