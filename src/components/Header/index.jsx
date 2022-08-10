import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode";

const Header = () => {
  return (
    <header>
      <p></p>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
      <DarkMode />
    </header>
  );
};

export default Header;
