import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* PG Information */}
        <div className="footer-section">
          <h3>Crystal Rocks Suites & PG Accommodation</h3>
          <p>Premium comfort, affordability, and world-class hospitality in a safe and friendly environment.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Fillform">Fill Form</Link></li>
            <li><Link to="/book-room">Book a Room</Link></li>
            <li><Link to="/FoodMenu">Food Menu</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📍 1st Cross, Bannerghatta Main Road,Bilekahalli, Bangalore, India</p>
          <p>📞 +91 9972963530</p>
          <p>📧 crystalrockspg@gmail.com</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
          <a href="https://wa.me/+919972963530" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
      <a href="tel:+9972963530">
        <FaPhone />
      </a>
      <a href="mailto:crystalrockspg.com">
        <FaEnvelope />
      </a>
      <a href="https://www.instagram.com/crystalrockspg/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
          </div>
        </div>
      </div>

      {/* Copyright Disclaimer */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Crystal Rocks Suites & PG. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
