import React from "react";
import scss from "./PackegesDetailContent.module.scss";
import HeadPackegeDet from "./Head_PackeckgeDet/HeadPackegeDet";
import AboutProgramDet from "./AboutProgramDet/AboutProgramDet";
import About_ProgramDet from "./About_ProgramDet/About_ProgramDet";
import QuestionsSection from "../../home/QuestionsSection/QuestionsSection";

const PackegesDetailContent = () => {
  return (
    <>
      <HeadPackegeDet />
      <AboutProgramDet />
      <About_ProgramDet />
      <QuestionsSection />
    </>
  );
};

export default PackegesDetailContent;
