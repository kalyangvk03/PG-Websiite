import React, { useState } from "react";
import "./BookRoom.css";
import r5 from "../components/images/qr.jpg"; // Adjust path based on your project structure


const BookRoom = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
    requiredDate: "",
    paymentProof: null,
    amountPaid: 3000, // Fixed advance payment
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, paymentProof: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("roomType", formData.roomType);
    formDataToSend.append("requiredDate", formData.requiredDate);
    formDataToSend.append("paymentProof", formData.paymentProof);
    formDataToSend.append("amountPaid", formData.amountPaid);

    try {
      const response = await fetch("http://localhost:5000/api/book-room", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Booking confirmed! ₹3000 paid, remaining due at check-in.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          roomType: "",
          requiredDate: "",
          paymentProof: null,
          amountPaid: 3000,
        });
      } else {
        alert("Failed to book the room.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error.");
    }
  };

  return (
    
    <div className="booking-page">

      
      {/* Booking Form Section */}
      <div className="booking-form-container">
        <div className="form-header">
          <h2>Book Your Stay at Crystal Rocks</h2>
          <p>Secure your accommodation now with an easy booking process.</p>
        </div>
        <div className="booking-notice">
  <p>
    <strong>Note:</strong> Before booking a room, you need to{" "}
    <a href="Fillform" className="fillForm">
      Fill Form
    </a>.
  </p>
</div>
<br/>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="roomType">Room Type</label>
            <select
              id="roomType"
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              required
            >
              <option value="">Select Room Sharing</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Triple">Triple</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="requiredDate">Check-in Date</label>
            <input
              type="date"
              id="requiredDate"
              name="requiredDate"
              value={formData.requiredDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="payment-section">
  <h3>Advance Payment - ₹3000</h3>
  <p>Please scan the QR code and upload the payment screenshot.</p>

  <img src={r5} alt="QR Code" className="qr-code" />

  <div className="file-upload">
    <label htmlFor="paymentProof">Upload Payment Proof</label>
    <input
      type="file"
      id="paymentProof"
      name="paymentProof"
      onChange={handleFileChange}
      required
    />
  </div>


            <p className="note">The remaining amount should be paid at the time of check-in.</p>
          </div>

          <button type="submit" className="submit-button">
            Confirm Booking
          </button>
        </form>
      </div>

      {/* PG Information Sidebar */}
      <div className="pg-info-sidebar">
        <h3>Why Choose PG Accommodation?</h3>
        <p>PG (Paying Guest) accommodations are a great choice for students and working professionals who seek affordability, safety, and convenience.</p>

        <h4>🏡 Benefits of Staying in a PG</h4>
        <ul>
          <li>✅ Fully furnished rooms with necessary amenities.</li>
          <li>✅ Affordable compared to renting an entire flat.</li>
          <li>✅ Housekeeping and laundry services included.</li>
          <li>✅ Food services available in most PGs.</li>
          <li>✅ Safety and security with CCTV and biometric access.</li>
        </ul>

        <h4>🎯 Tips for Choosing the Best PG</h4>
        <ul>
          <li>🔹 Check the location and connectivity to your workplace or college.</li>
          <li>🔹 Inspect the cleanliness and security measures.</li>
          <li>🔹 Verify rent details and hidden charges.</li>
          <li>🔹 Read reviews or talk to existing tenants.</li>
        </ul>
      </div>
    </div>
  );
};

export default BookRoom;
