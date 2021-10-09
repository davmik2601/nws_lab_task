import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="header">
      <nav className="navbar">
        <Link className="logo" to="/">
          <h3>NWS LAB CATS</h3>
        </Link>
      </nav>
      </header>
    </div>
  )
}

export default Header;
