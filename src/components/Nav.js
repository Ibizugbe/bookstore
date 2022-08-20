import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <nav>
        <ul className="nav-ul">
          <li className="nav-brand">Bookstore CMS</li>
          <li>
            <Link to="/" className="nav-links">
              Books
            </Link>
          </li>
          <li>
            <Link to="/components/Category" className="nav-links">
              Category
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <img src="" alt="profile" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
