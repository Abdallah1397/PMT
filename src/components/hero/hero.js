import React from "react";
import "./hero.css";

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="heroContent">
        <h3 className="heroTitle">{props.title}</h3>
      </div>
    </div>
  );
};

export default Hero;
