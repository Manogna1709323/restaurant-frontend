import React from "react";
import "./About.css";
import aboutImg from "../assets/food.jpeg"; // your restaurant image

function About() {
  return (
    <div className="about-page">

      <div className="about-container">

        {/* LEFT SIDE — IMAGE */}
        <div className="about-left">
          <img src={aboutImg} alt="Restaurant" className="about-img" />
        </div>

        {/* RIGHT SIDE — STORY */}
        <div className="about-right">
          <h2>Our Story</h2>

          <p>
            Bagayath Bawarchi began with a simple passion — to bring authentic,
            home-style flavors to everyone who walks through our doors.  
          </p>

          <p>
            What started as a small kitchen with big dreams has now become a
            favorite spot for families, friends, and food lovers. We believe in
            serving food made with love, care, and the freshest ingredients.
          </p>

          <p>
            Every dish is crafted to reflect our tradition, culture, and warmth.
            From aromatic biryanis to flavorful curries, every bite tells a
            story.
          </p>
        </div>

      </div>

    </div>
  );
}

export default About;
