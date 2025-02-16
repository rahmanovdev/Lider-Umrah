import React from 'react'
import scss from './HomePage.module.scss'
import HeroSection from './home/HeroSection/HeroSection'
import AboutSection from './home/AboutSection/AboutSection'
import StepsHajjSection from './home/StepsOfHajjSection/StepsHajjSection'
import QuestionsSection from './home/QuestionsSection/QuestionsSection'
import InformationSection from './home/InformationSection/InformationSection'
import TrafficsSection from './home/TrafficsSection/TrafficsSection'

const HomePage = () => {
  return (
    <>
      <div className={scss.HomePage}>
        <HeroSection />
        <AboutSection />
        <TrafficsSection />
        <StepsHajjSection />
        <QuestionsSection />
        <InformationSection />
      </div>
    </>
  )

}

export default HomePage
