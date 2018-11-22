import * as React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        TSX ReactFull
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
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/datasets">
              DataSets
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/dataSheet">
              DataSheet
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/handsontable">
              HandsonTable
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
