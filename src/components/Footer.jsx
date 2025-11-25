import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import logo from "../assets/logo1.png";

function Footer() {
  return (
    <footer className="footer">

      {/* LEFT SECTION */}
      <div className="footer-left">
        <img src={logo}
          alt="Bagayath Bawarchi Logo"
          className="footer-logo"
        />

        <h2 className="footer-title">Bhagayath Bawarchi</h2>

        <p className="footer-about">
          Authentic flavors crafted with love.<br />
          Serving delicious food since 1995.
        </p>

        {/* Social Links */}
        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <div className="footer-middle">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* RIGHT SECTION */}
      <div className="footer-right">
        <h3>Contact Us</h3>

        <p><FaPhoneAlt /> +91 98765 43210</p>

        <p>
          <FaClock /> Mon–Sun: 11 AM – 11 PM
        </p>

        <p className="address">
          <FaMapMarkerAlt /> 4th Cross Street,<br />
          Gandhi Nagar, Hyderabad.
        </p>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Bagayath Bawarchi. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
