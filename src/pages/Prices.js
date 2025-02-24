import React from "react";
import { FaBed, FaCrown, FaTshirt, FaInfoCircle } from "react-icons/fa";
import "./Prices.css";

const Prices = () => {
  return (
    <div className="prices-container">
      <h2 className="prices-title">🏠 Accommodation Pricing</h2>
      <p className="prices-description">
        Stay in comfort with our well-furnished rooms, modern amenities, and excellent hospitality.
      </p>

      {/* Pricing Section */}
      <div className="pricing-grid">
        <div className="price-card">
          <FaBed className="icon" />
          <h3>Triple Sharing</h3>
          <p className="price">₹7,000 <span>(Without Balcony)</span></p>
          <p className="price">₹7,500 <span>(With Balcony)</span></p>
          <p className="refund-policy">
            <FaInfoCircle className="info-icon" /> Advanced Amount: ₹3,000 (Refundable)
          </p>
        </div>

        <div className="price-card best-value">
          <FaCrown className="icon" />
          <h3>Double Sharing</h3>
          <p className="price">₹9,000 <span>(Without Balcony)</span></p>
          <p className="price">₹9,500 <span>(With Balcony)</span></p>
          <p className="refund-policy">
            <FaInfoCircle className="info-icon" /> Advanced Amount: ₹3,000 (Refundable)
          </p>
          <span className="badge">⭐Preferred⭐</span>
        </div>

        <div className="price-card">
          <FaBed className="icon" />
          <h3>Single Sharing</h3>
          <p className="price">₹16,000</p>
          <p className="refund-policy">
            <FaInfoCircle className="info-icon" /> Advanced Amount: ₹3,000 (Refundable)
          </p>
        </div>
      </div>

      {/* Additional Services */}
      <div className="extra-services">
        <h3>Additional Services</h3>
        <p><FaTshirt className="service-icon" /> Laundry & Ironing: <strong>₹500/month</strong> (Optional)</p>
      </div>

      {/* Refund Policy Section */}
      <div className="refund-policy-section">
        <h3>Refund Policy</h3>
        <ul>
          <li>✅ <strong>₹2,000</strong> will be refunded if you inform us <strong>30 days</strong> before vacating.</li>
          <li>❌ <strong>₹1,000</strong> will be deducted as a maintenance charge.</li>
          <li>⚠️ No refund will be provided if you vacate without prior intimation.</li>
        </ul>
      </div>
    </div>
  );
};

export default Prices;