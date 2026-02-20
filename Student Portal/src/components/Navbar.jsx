import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/students" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Students
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Add Student
          </NavLink>
        </li>
        <li>
          <NavLink to="/counter" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Counter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
