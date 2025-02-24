import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { phone, message } = formData;
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("📞 Please enter a valid 10-digit phone number.");
      return false;
    }
    if (message.trim().length < 5) {
      alert("✉️ Your message must be at least 5 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(
          `🎉 Thank you, ${formData.name}! We've received your message and will get back to you soon.`
        );
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("🚨 Error sending message. Please try again.");
      }
    } catch (error) {
      alert("⚠️ Server error. Please try again later.");
    }
  };

  return (
    <div className="contact-page">
      {/* Left Side: Contact Form */}
      <div className="contact-form-container">
        <div className="contact-form-card">
          <h2>Get in Touch</h2>
          <p>We’re here to help! Reach out to us for any inquiries.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message "
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Right Side: Contact Info & Map */}
      <div className="contact-info-container">
        <div className="contact-info-card">
          <h3>Our Location</h3>
          <p>Crystal Rocks Suites & PG Accommodation For Gents</p>
          <p>
            📍 1st Cross Rd, Bannerghatta Main Rd, Bilekahalli, Bengaluru,
            Karnataka 560076
          </p>
          <p>
  📞 <a href="tel:+919972963530" style={{ textDecoration: "none", color: "#2575fc" }}>+91 9972963530</a>
</p>
<p>
  💬 <a href="https://wa.me/919972963530" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#25D366" }}>
    Chat on WhatsApp
  </a>
</p>

          <p>
            📧{" "}
            <a href="mailto:crystalrockspg@gmail.com">
              crystalrockspg@gmail.com
            </a>
          </p>

          {/* Google Map */}
          <div className="map-container">
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0725215126733!2d77.60446127476367!3d12.894211087389334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1521c895c081%3A0xa2ab657ab5324129!2sCrystal%20Rocks%20Suites%20%26%20PG%20Accommodation%20For%20Gents!5e0!3m2!1sen!2sin!4v1700000000000"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
