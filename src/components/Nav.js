import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <nav>
        <ul className="nav-ul p-0 m-0">
          <li className="nav-brand">Bookstore CMS</li>
          <li>
            <Link to="/" className="nav-links">
              Books
            </Link>
          </li>
          <li>
            <Link to="/components/Category" className="nav-links text-muted">
              Category
            </Link>
          </li>
        </ul>
        <ul className="p-0 m-0">
          <li>
            <i className="fa fa-user" style={{ color: '#0290ff' }} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
