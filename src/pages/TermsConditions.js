import React from 'react';
import './Terms.css'; // Import CSS file

const TermsAndConditions = () => {
  return (
    <div className="container">
      <div className="terms-box">
        <h1>Terms & Conditions</h1>
        <p className="intro">Please read the following terms and conditions carefully before staying at our PG accommodation.</p>

        <div className="terms-list">
          <div className="term">
            <h2>1. Visitors & Guests</h2>
            <p>Visitors are not allowed inside the PG premises without prior permission. Unauthorized entry will lead to strict action.</p>
          </div>

          <div className="term">
            <h2>2. Prohibited Activities</h2>
            <p>The consumption of drugs, ganja, alcohol, or any illegal substances is strictly prohibited. Violators will be reported to the police.</p>
          </div>

          <div className="term">
            <h2>3. Rent & Payment</h2>
            <p>Rent must be paid on or before the due date. Late payments will result in penalties. No refunds are provided after payment.</p>
          </div>

          <div className="term">
            <h2>4. Cleanliness & Hygiene</h2>
            <p>All residents must maintain cleanliness in rooms and common areas. Poor hygiene may result in fines.</p>
          </div>

          <div className="term">
            <h2>5. Security & ID Proof</h2>
            <p>All residents must submit valid ID proof during registration. Security checks will be conducted regularly.</p>
          </div>

          <div className="term">
            <h2>6. Noise & Disturbance</h2>
            <p>Loud music, parties, or any disturbance is strictly prohibited, especially at night.</p>
          </div>

          <div className="term">
            <h2>7. Damage to Property</h2>
            <p>Residents must compensate for any damages to PG property. Intentional damage will lead to eviction.</p>
          </div>

          <div className="term important">
            <h2>8. Valuable Losses</h2>
            <p><strong>We are not responsible for any loss of valuables, money, or belongings. Residents must take care of their personal property.</strong></p>
          </div>

          <div className="term">
            <h2>9. Check-Out & Notice Period</h2>
            <p>A one-month notice period is required before vacating. Failure to provide notice may result in loss of the security deposit.</p>
          </div>

          <div className="term">
            <h2>10. Management Rights</h2>
            <p>The PG management reserves the right to modify rules, enforce regulations, and take necessary action in case of violations.</p>
          </div>
        </div>

        <p className="footer-text">By staying at our PG, you agree to abide by these terms and conditions. Violation of any rule may result in strict action.</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
