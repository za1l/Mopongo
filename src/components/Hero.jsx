import React from "react";
import "./Hero.css";
import SocialIcons from "./SocialIcons";
import "./SocialIcons.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-image">
          <img
            src="/images/mopongohero.jpg"
            alt="Hero"
          />
        </div>
        <h1>MOPONGOWORLD</h1>
        <p>Descubre el mundo de MOPONGO</p>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Hero;
