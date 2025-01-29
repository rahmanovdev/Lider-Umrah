import React from "react";
import scss from "./HomePage.module.scss";
import HeroSection from "./home/HeroSection/HeroSection";
import AboutSection from "./home/AboutSection/AboutSection";
import TariffsSection from "./home/TariffsSection/TariffsSection";
import StepsHajjSection from "./home/StepsOfHajjSection/StepsHajjSection";
import QuestionsSection from "./home/QuestionsSection/QuestionsSection";
import InformationSection from "./home/InformationSection/InformationSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TariffsSection />
      <StepsHajjSection />
      <QuestionsSection />
      <InformationSection />
    </>
  );
};

export default HomePage;
