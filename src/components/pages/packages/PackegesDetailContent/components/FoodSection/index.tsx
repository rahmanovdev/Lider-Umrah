"use client";
import Image from "next/image";
import { Food } from "../../types";
import styles from "./styles.module.scss";
import { foods } from "../../data/content";
import clsx from "clsx";
import { useState } from "react";

interface FoodSectionProps {
  data: Food;
}

export const FoodSection: React.FC<FoodSectionProps> = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className={styles.foodContent}>
      <div className={styles.foodSlider}>
        <div className={styles.sliderWrapper}>
          <button
            className={styles.sliderButton}
            onClick={() =>
              setCurrentImageIndex((prev: number) =>
                prev === 0 ? foods[0].images.length - 1 : prev - 1
              )
            }
          >
            ←
          </button>
          <div className={styles.imageWrapper}>
            <Image
              src={foods[0].images[currentImageIndex]}
              alt={`Food ${currentImageIndex + 1}`}
              width={600}
              height={400}
              objectFit="cover"
            />
          </div>
          <button
            className={styles.sliderButton}
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev === foods[0].images.length - 1 ? 0 : prev + 1
              )
            }
          >
            →
          </button>
        </div>
        <div className={styles.sliderDots}>
          {foods[0].images.map((_, index) => (
            <button
              key={index}
              className={clsx(styles.dot, {
                [styles.activeDot]: index === currentImageIndex,
              })}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className={styles.foodInfo}>
        <h2>{foods[0].title}</h2>
        <p>{foods[0].description}</p>
      </div>
    </div>
  );
};
