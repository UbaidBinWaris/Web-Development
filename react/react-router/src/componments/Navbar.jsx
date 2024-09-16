import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navb">
      <ul>
        <Link to="/Home"><li>Home</li></Link>
        <Link to="/About"><li>About </li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
