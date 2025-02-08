import React from "react";
import scss from "./AboutUsContent.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { aboutLider } from "./constants/constants";
import AboutCards from "@/components/ui/cards/about_cards/AboutCards";
import AboutUsImages from "./AboutUsImage/AboutUsImage";
import Whywe from "./WhyWe/WhyWe";
import QuestionsSection from "../../home/QuestionsSection/QuestionsSection";

const AboutUsContent = () => {
  return (
    <div className={scss.AboutUsContent}>
      <div className={scss.head_about}>
        <h1>
          О компании <span>«Lider Umrah»</span>
        </h1>
        <IoIosArrowDown />
      </div>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.about_content}>
            {aboutLider.map((item, index) => (
              <div
                key={index}
                className={scss.item}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            ))}

            <div className={scss.video_container}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/6i2rjWV5Djc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <AboutCards />
        </div>
      </div>
      <AboutUsImages />
      <Whywe />
      <QuestionsSection />
    </div>
  );
};

export default AboutUsContent;
