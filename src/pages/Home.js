import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import './Home.css'; // Import the modern CSS

const services = [
  { icon: "🏠", title: "Fully Furnished Rooms", desc: "Spacious, well-equipped with premium furniture & cozy beds." },
  { icon: "🍽️", title: "Hygienic Food", desc: "Nutritious, fresh meals prepared daily for a homely experience." },
  { icon: "📶", title: "High-Speed WiFi", desc: "Uninterrupted, blazing-fast internet for work & entertainment." },
  { icon: "🛡️", title: "24/7 Security", desc: "Round-the-clock surveillance & secure premises for your safety." },
  { icon: "🧹", title: "Daily Cleaning", desc: "Sanitized & cleaned daily with high-quality disinfectants." },
  { icon: "🧺", title: "Laundry & Washing", desc: "Washing machines, purified water & convenient laundry services." },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1 className="hero-title">Premium PG Living, Redefined at Crystal Rocks Family</h1>
        <p className="hero-subtitle">"Experience unparalleled luxury and supreme comfort with world-class amenities designed to enhance your lifestyle."</p>
        <Link to="/Fillform">
  <Button variant="contained" className="explore-btn">
    Claim Your Space
  </Button>
</Link>
      </header>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">Exclusive Benefits</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lifestyle Section */}
<section className="lifestyle-section">
  <h2 className="section-title">Live the Best PG Experience</h2>
  <p className="lifestyle-desc">
    We redefine <strong>luxury PG living</strong> by offering premium services, world-class security, and modern amenities.
    Whether you're a student or a professional, we ensure your stay is <strong>stress-free & comfortable</strong>.
  </p>

  {/* Lifestyle Highlights */}
  <div className="lifestyle-highlights">
    <div className="highlight">
      <span className="highlight-icon">🏋️‍♂️</span>
      <h3>Fitness & Wellness</h3>
      <p>Stay active with our fully equipped gym and yoga sessions.</p>
    </div>
    <div className="highlight">
      <span className="highlight-icon">🎮</span>
      <h3>Entertainment Lounge</h3>
      <p>Relax in our gaming zone, watch movies, and socialize in a vibrant community space.</p>
    </div>
    <div className="highlight">
      <span className="highlight-icon">📚</span>
      <h3>Study & Co-Working Space</h3>
      <p>Enjoy a peaceful environment with high-speed WiFi, ideal for students and remote workers.</p>
    </div>
    <div className="highlight">
      <span className="highlight-icon">🌱</span>
      <h3>Green & Sustainable Living</h3>
      <p>We prioritize eco-friendly practices, solar-powered energy, and waste recycling.</p>
    </div>
  </div>

  {/* Community Engagement */}
  <div className="community-section">
    <h2 className="section-title">Join a Thriving Community</h2>
    <p className="lifestyle-desc">
      Experience a vibrant social life with engaging activities, weekend get-togethers, and networking events.
    </p>
    <div className="community-events">
      <div className="event-card">
        <h3>🎤 Open Mic & Game Nights</h3>
        <p>Express yourself or enjoy a fun-filled evening with board games & karaoke.</p>
      </div>
      <div className="event-card">
        <h3>🍽️ Community Dinners</h3>
        <p>Enjoy delicious meals and bond with fellow residents every weekend.</p>
      </div>
      <div className="event-card">
        <h3>🛍️ Shopping & Movie Outings</h3>
        <p>Regular planned trips to malls, movie theaters, and local attractions.</p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
