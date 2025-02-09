"use client";
import React, { useState } from "react";
import {
  MdCalendarMonth,
  MdLocationOn,
  MdThumbUp,
  MdThumbDown,
} from "react-icons/md";
import styles from "./AboutProgramDet.module.scss";
import Image from "next/image";

const sections = [
  {
    title: "Питание",
    content: "Lorem ipsum dolor sit amet consectetur...",
    icon: <MdCalendarMonth className={styles.icon} />,
  },
  {
    title: "Какие места посетим",
    content: "каыраыдра",
    icon: <MdLocationOn className={styles.icon} />,
  },
  {
    title: "Мы рекомендуем!",
    content: "Lorem ipsum dolor sit amet consectetur...",
    icon: <MdThumbUp className={styles.icon} />,
  },
  {
    title: "Не рекомендуем",
    content: "Lorem ipsum dolor sit amet consectetur...",
    icon: <MdThumbDown className={styles.icon} />,
  },
  {
    title: "Вам дадим ",
    content: "Lorem ipsum dolor sit amet consectetur...",
    icon: <MdThumbDown className={styles.icon} />,
  },
];

const AboutProgramDet = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="container">
      <div className={styles.sectionList}>
        {sections.map((section, index) => (
          <button
            key={index}
            className={styles.sectionButton}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <span className={styles.buttonText}>{section.title}</span>
            <div className={styles.iconContainer}>
              <span className={styles.iconWrapper}>{section.icon}</span>
            </div>
          </button>
        ))}
      </div>

      {/* <Image
        src={"/assets/tariffdetail/"}
        width={300}
        height={300}
        alt="Frame card"
        className={styles.frame_card}
      /> */}

      {activeIndex !== null && (
        <div className={styles.contentCard}>
          <div className={styles.imageContainer}></div>
          <div className={styles.textContent}>
            {sections[activeIndex].content}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutProgramDet;
