import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const styleNavbar = {
    background: 'rgb(32, 35, 41) none repeat scroll 0% 0%',
  };

  const styleSpan = {
    position: 'relative',
    bottom: '5px',
    left: '5px',
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      style={styleNavbar}
    >
      <div className="container-fluid">
        <div className="navbar-brand">
          <i className="bx bxl-react bx-burst bx-sm"></i>
          <span style={styleSpan}>Rick and Morty</span>
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              <i className="bx bxs-home bx-sm"></i>
              <span style={styleSpan}>Главная</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/series">
              <i className="bx bx-list-ul bx-sm"></i>
              <span style={styleSpan}>Список серий</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
