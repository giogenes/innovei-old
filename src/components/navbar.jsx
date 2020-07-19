import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Innovei
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <NavLink className="nav-item nav-link" to="/units">
            Units
          </NavLink>
          <NavLink className="nav-item nav-link" to="/not-found">
            Features
          </NavLink>
        </ul>
        <ul className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/help">
            Help
          </NavLink>
          <NavLink className="nav-item nav-link" to="/Login">
            Login
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
