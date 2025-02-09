import React from "react";
import scss from "./PackegesDetailContent.module.scss";
import HeadPackegeDet from "./Head_PackeckgeDet/HeadPackegeDet";
import AboutProgramDet from "./AboutProgramDet/AboutProgramDet";

const PackegesDetailContent = () => {
  return (
    <>
      <HeadPackegeDet />
      <AboutProgramDet />
    </>
  );
};

export default PackegesDetailContent;
