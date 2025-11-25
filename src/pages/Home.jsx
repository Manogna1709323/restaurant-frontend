import React from "react";
import "./Home.css";
import heroImg from "../assets/hero2.jpg";
import { GiCook, GiMeal, GiKnifeFork, GiChefToque } from "react-icons/gi";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <img src={heroImg} alt="Bagayath Bawarchi" className="hero-image" />
        <div className="hero-content">
          <h1>Welcome to Bhagayath Bawarchi</h1>
          <p>Experience the taste of tradition with authentic flavors.</p>
        </div>
      </section>

      {/* WHAT MAKES US SPECIAL */}
      <section className="special-section">
        <h2>What Makes Us Special</h2>
        <div className="special-cards">
          <div className="card">
            <GiCook className="card-icon" />
            <h3>Authentic Taste</h3>
            <p>Traditional recipes with fresh ingredients for perfect flavors.</p>
          </div>
          <div className="card">
            <GiChefToque className="card-icon" />
            <h3>Experienced Chefs</h3>
            <p>Our chefs bring passion and skill to every dish we serve.</p>
          </div>
          <div className="card">
            <GiMeal className="card-icon" />
            <h3>Fresh Ingredients</h3>
            <p>Only the freshest ingredients make it to your plate.</p>
          </div>
        </div>
      </section>

      {/* RESTAURANT HIGHLIGHTS */}
      <section className="highlights-section">
        <h2>Restaurant Highlights</h2>
        <div className="highlight-cards">
          <div className="highlight-card">
            <GiKnifeFork className="highlight-icon" />
            <h3>50+ Dishes</h3>
            <p>Variety to satisfy every taste bud.</p>
          </div>
          <div className="highlight-card">
            <GiCook className="highlight-icon" />
            <h3>10k+ Customers</h3>
            <p>Trusted and loved by our patrons.</p>
          </div>
          <div className="highlight-card">
            <GiChefToque className="highlight-icon" />
            <h3>4.8★ Rating</h3>
            <p>Excellence recognized by food critics and customers alike.</p>
          </div>
          <div className="highlight-card">
            <GiMeal className="highlight-icon" />
            <h3>100% Fresh</h3>
            <p>Hygienic kitchen with premium quality ingredients.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
