import React from "react";
import scss from "./GalleryContent.module.scss";

const GalleryContent = () => {
  return (
    <div className={scss.GalleryContent}>
      <div className="container">
        <div className={scss.content}></div>
      </div>
    </div>
  );
};

export default GalleryContent;
