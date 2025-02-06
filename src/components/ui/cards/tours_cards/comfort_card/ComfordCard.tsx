import React from "react";
import tarif_img from "../../../../../../public/assets/tarif_images/tarif_img.png";
import scss from "./ComfortCard.module.scss";
import Image from "next/image";

const ComfordCard = () => {
  return (
    <div className={scss.Main}>
      <h2>Комфорт</h2>

      <div className={scss.img_block}>
        <Image src={tarif_img} alt="" width={700} height={300} />
      </div>

      <div className={scss.card_container}>
        <div className={scss.data_block}>
          <p>
            от <span>2 марта</span>
          </p>
          <div className={scss.line}></div>
          <p>
            до <span>19 марта</span>
          </p>
        </div>

        <div className={scss.line1}>
          <h4>Ажы башчы:</h4>
          <h5>Lorem Ipsums</h5>
        </div>
        <hr />
        <div className={scss.line2}>
          <h4>Колличество:</h4>
          <h5>120 мест</h5>
        </div>
        <hr />

        <div className={scss.line3}>
          <h4>Длительность:</h4>
          <h5>14 дней</h5>
        </div>
        <hr />
      </div>

      <div className={scss.button}>
        <button> Подробнее </button>
      </div>
    </div>
  );
};

export default ComfordCard;
