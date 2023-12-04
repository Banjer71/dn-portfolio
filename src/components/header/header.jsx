import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
  return (
    <header className='header'>
      <ul className='menu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/sideprojects'>Side-Projects</Link></li>
      </ul>
    </header>
  );
};

export default Header;
