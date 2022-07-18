import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../route';

export function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-1">
        <Link to={ROUTES.MAIN.path} className="brand-logo">
          Rick and Morty
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to={ROUTES.MAIN.path}>Главная</Link>
          </li>
          <li>
            <Link to={ROUTES.EPISODES.path}>Эпизоды</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
