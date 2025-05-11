import React from "react";
import "./Hero.css";
import SocialIcons from "./SocialIcons";
import "./SocialIcons.css";

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        width: "80%",
        height: "70vh",
        overflow: "hidden",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0,0,0,0.2)",
        margin: "0 auto",
        maxWidth: "1200px",
      }}
    >
      <div
        className="hero-content"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="hero-image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src="/images/mopongohero.jpg"
            alt="Hero"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: "0.9",
              filter: "brightness(1.1) contrast(1.1)",
              objectPosition: "center",
            }}
          />
        </div>
        <h1
          style={{
            position: "relative",
            zIndex: 2,
            background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "4.5rem",
            fontWeight: "bold",
            textShadow: "3px 3px 6px rgba(0,0,0,0.3)",
            marginBottom: "1.5rem",
            animation: "fadeInScale 1.5s ease-out",
            letterSpacing: "2px",
            transform: "perspective(1000px) rotateX(5deg)",
            transition: "transform 0.3s ease",
            cursor: "default",
            ":hover": {
              transform: "perspective(1000px) rotateX(0deg) scale(1.05)",
            },
          }}
        >
          MOPONGOWORLD
        </h1>
        <p
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
            fontSize: "1.5rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Descubre el mundo de MOPONGO
        </p>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Hero;
