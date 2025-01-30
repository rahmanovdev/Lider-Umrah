import React from "react";
import scss from "./AboutSection.module.scss";

const AboutSection = () => {
  return (
    <div className={scss.AboutSection}>
      <div className="container">
        <div className={scss.content}></div>
      </div>
    </div>
  );
};

export default AboutSection;
