import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import logo from "../assets/logo1.png";

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-5">
      <div className="container">
        <div className="row text-center text-md-start align-items-start">

          {/* ✅ LEFT SECTION */}
          <div className="col-12 col-md-4 mb-4 footer-left">
            <img
              src={logo}
              alt="Bagayath Bawarchi Logo"
              className="footer-logo mb-2"
            />

            <h2 className="footer-title">Bhagayath Bawarchi</h2>

            <p className="footer-about">
              Authentic flavors crafted with love.
              <br />
              Serving delicious food since 1995.
            </p>

            <div className="footer-social justify-content-center justify-content-md-start">
              <a href="#" className="me-3">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* ✅ MIDDLE SECTION */}
          <div className="col-6 col-md-4 mb-4 footer-middle">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* ✅ RIGHT SECTION */}
          <div className="col-6 col-md-4 mb-4 footer-right">
            <h3>Contact Us</h3>

            <p>
              <FaPhoneAlt className="me-2" /> +91 98765 43210
            </p>

            <p>
              <FaClock className="me-2" /> Mon–Sun: 11 AM – 11 PM
            </p>

            <p className="address">
              <FaMapMarkerAlt className="me-2" />
              4th Cross Street,<br />
              Gandhi Nagar, Hyderabad.
            </p>
          </div>
        </div>

        {/* ✅ COPYRIGHT */}
        <div className="footer-bottom text-center pt-3 mt-4 border-top">
          © {new Date().getFullYear()} Bagayath Bawarchi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
