import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navreal">
      <a to="/">
        <img src={logo} className="logo" alt="" />
      </a>
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
      <div className="collapse navbar-collapse  " id="navbarNav">
        <ul className="navbar-nav navul-container">
          <li className="nav-item">
            <a
              href="https://www.brightmoney.co/"
              className="nav-link active-link"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className=" nav-link" href="https://www.brightmoney.co/features">
              Product
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.brightmoney.co/categories/all-posts"
            >
              Learn
            </a>
          </li>

          <li className="nav-item">
            <Link to="/budgetbase" className="nav-link">
              Explore This Expense Mate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
