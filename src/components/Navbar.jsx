import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo1.png";

function Navbar() {
  return (
    <nav className="navbar">
      {/* IMAGE LOGO */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Bhagayath Bawarchi" className="logo-img" />
        </Link>
      </div>

      {/* NAV LINKS */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* SOCIAL + MENU */}
      <div className="right-section">
        {/* SOCIAL ICONS */}
        <div className="social-icons" aria-hidden>
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

        {/* MENU BUTTON */}
        <Link to="/menu">
          <button className="menu-btn">Menu</button>
        </Link>

        <Link to="/cust">
          <button className="cust-btn">Cust</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
