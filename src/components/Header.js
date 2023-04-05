import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='Header'>
      <img src="/logo-min.png" alt='Logo' className='logo'/>
      <h1>Giulia Roggia</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
