import React from "react";
import scss from "./HeroSection.module.scss";
const HeroSection = () => {
  return (
    <div className={scss.HeroSection}>
      <div className="container">
        <div className={scss.content}>hero</div>
      </div>
    </div>
  );
};

export default HeroSection;
