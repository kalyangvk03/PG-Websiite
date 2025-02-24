import React from "react";
import { Link } from "react-router-dom";
import './About.css'; // Import the CSS file for styling
const AboutCrystalRocks = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="jhero-section">
        <div className="jhero-content">
          <h1>Let's Know About Crystal Rocks Suites & PG Accommodation</h1>
          <p>Your perfect blend of comfort, convenience, and modern living.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2>About Crystal Rocks</h2>
          <p>
            Crystal Rocks Suites & PG Accommodation is a premium living space designed for students,
            working professionals, and travelers seeking a comfortable and hassle-free stay. Located in
            the heart of the city, we offer fully furnished suites and PG rooms with modern amenities,
            high-speed internet, and a vibrant community atmosphere.
          </p>
          <p>
            Our mission is to provide a home away from home, where you can focus on your goals while
            enjoying a stress-free living experience. With 24/7 security, housekeeping, and a dedicated
            support team, Crystal Rocks ensures your stay is safe, comfortable, and memorable.
          </p>
        </div>
      </section>

      {/* Why Choose Crystal Rocks */}
      <section className="why-choose-section">
        <h2>Why Choose Crystal Rocks?</h2>
        <div className="kfeatures-grid">
          <div className="kfeature-card">
            <h3>Modern Amenities</h3>
            <p>Fully furnished rooms, high-speed Wi-Fi, and modern appliances for a seamless living experience.</p>
          </div>
          <div className="kfeature-card">
            <h3>Prime Location</h3>
            <p>Located near popular hubs, educational institutions, and business centers for easy access.</p>
          </div>
          <div className="kfeature-card">
            <h3>Safe & Secure</h3>
            <p>24/7 security, CCTV surveillance, and secure access systems for your peace of mind.</p>
          </div>
          <div className="kfeature-card">
            <h3>Vibrant Community</h3>
            <p>Connect with like-minded individuals through community events and shared spaces.</p>
          </div>
        </div>
      </section>

      {/* Popular Places Nearby */}
      <section className="popular-places-section">
        <h2>Popular Places Near Crystal Rocks</h2>
        <div className="places-grid">
          <div className="place-card">
            <h3>Global Tech Park at Dairy Circle</h3>
            <p>Just 15 minutes away, perfect for working professionals.</p>
          </div>
          <div className="place-card">
            <h3>Nexus Vega City and Royal Meenakshi Mall</h3>
            <p>A shopping and entertainment hub located 10 minutes away.</p>
          </div>
          <div className="place-card">
            <h3>Lalbagh Park</h3>
            <p>A serene escape for nature lovers, only 25 minutes away.</p>
          </div>
          <div className="place-card">
            <h3>IIMB, Christ, Oxford, AMC Campus</h3>
            <p>Conveniently located for students, just 20-30minutes away.</p>
          </div>
          <div className="place-card">
            <h3>Metro Staions</h3>
            <p>JP Nagar, Jayanagar Metro Station, Just 25 minutes away.</p>
          </div>
          <div className="place-card">
            <h3>Public Transport</h3>
            <p>Bilekahalli Busstand is in Bannerghatta main road just 4 minutes away.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
  <h2>Ready to Experience Crystal Rocks?</h2>
  <p>Book your stay today and join our growing community of happy residents.</p>
  <Link to="/Fillform" className="cta-button">Book Now</Link>
</section>
    </div>
  );
};

export default AboutCrystalRocks;