import React, { useState } from "react";
import "./Gallery.css"; // Importing styles
import r1 from "../components/images/r1.png";
import r2 from "../components/images/r2.png";
import r3 from "../components/images/r3.png";
import r4 from "../components/images/r4.png";
import r5 from "../components/images/r5.png";
import r6 from "../components/images/r6.png";
import r7 from "../components/images/r7.png";
import r8 from "../components/images/r8.png";

// Image imports for gallery
const images = [
  require("../components/images/1.jpg"),
  require("../components/images/2.jpg"),
  require("../components/images/3.jpg"),
  require("../components/images/4.jpg"),
  require("../components/images/5.jpg"),
  require("../components/images/6.jpg"),
  require("../components/images/7.jpg"),
  require("../components/images/8.jpg"),
];

const reviews = [r1, r2, r3, r4, r5, r6, r7, r8];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (img) => {
    setSelectedImage(img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      {/* Gallery Section */}
      <section className="gallery-section">
        <h2 className="section-title">📸 GALLERY</h2>
        <p className="section-description">
          Explore our spacious rooms, well-maintained common areas, and vibrant community.
        </p>

        <div className="image-grid">
          {images.map((img, index) => (
            <div key={index} className="image-card" onClick={() => openLightbox(img)}>
              <img src={img} alt={`Gallery ${index + 1}`} className="gallery-img" />
              <div className="image-overlay">
                <span className="view-text">View</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <h2 className="section-title">⭐ Google Reviews</h2>
        <p className="section-description">
          See what our residents have to say about their experience at Crystal Rocks Family.
        </p>

        <div className="review-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <img src={review} alt={`Review ${index + 1}`} className="review-img" />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close-lightbox">&times;</span>
          <img src={selectedImage} alt="Full size" className="lightbox-img" />
        </div>
      )}
    </div>
  );
};

export default Gallery;