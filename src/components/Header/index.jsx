import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <header>
         <p></p>
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/works">Works</Link>
      </header>
   );
};

export default Header;

