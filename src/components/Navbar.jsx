import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo1.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        {/* ✅ LOGO */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Bhagayath Bawarchi" className="logo-img me-2" />
        </Link>

        {/* ✅ HAMBURGER BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ COLLAPSIBLE CONTENT */}
        <div className="collapse navbar-collapse" id="mainNavbar">

          {/* ✅ NAV LINKS */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* ✅ RIGHT SIDE */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-3">

            {/* ✅ SOCIAL ICONS */}
            <div className="d-flex gap-3">
              <a
                className="social-link"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="nav-icon" />
              </a>

              <a
                className="social-link"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="nav-icon" />
              </a>
            </div>

            {/* ✅ BUTTONS */}
            <div className="d-flex gap-2">
              <Link to="/menu">
                <button className="menu-btn">Menu</button>
              </Link>

              <Link to="/cust">
                <button className="cust-btn">Cust</button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
