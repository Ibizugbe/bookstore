import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li className="nav-brand">Bookstore</li>
        </ul>
        <ul>
          <li>
            <Link to="/" className="nav-links">
              Books
            </Link>
          </li>
          <li>
            <Link to="/components/Catigory" className="nav-links">
              Catigory
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
