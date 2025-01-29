import React from "react";
import scss from "./PackegesContent.module.scss";

const PackegesContent = () => {
  return (
    <div className={scss.PackegesContent}>
      <div className="container">
        <div className={scss.content}></div>
      </div>
    </div>
  );
};

export default PackegesContent;
