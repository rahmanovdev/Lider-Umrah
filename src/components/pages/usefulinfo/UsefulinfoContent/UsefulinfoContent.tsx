import React from "react";
import scss from "./UsefulinfoContent.module.scss";

const UsefulinfoContent = () => {
  return (
    <div className={scss.UsefulinfoContent}>
      <div className="container">
        <div className={scss.content}>Usefulinfo</div>
      </div>
    </div>
  );
};

export default UsefulinfoContent;
