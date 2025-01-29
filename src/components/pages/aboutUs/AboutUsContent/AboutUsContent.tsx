import React from "react";
import scss from "./AboutUsContent.module.scss";

const AboutUsContent = () => {
  return (
    <div className={scss.AboutUsContent}>
      <div className="container">
        <div className={scss.content}>About Us</div>
      </div>
    </div>
  );
};

export default AboutUsContent;
