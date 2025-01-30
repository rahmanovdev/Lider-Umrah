import React from "react";
import scss from "./StepsHajjSection.module.scss"
import Image from "next/image";
import img1 from "../../../../../public/assets/stepsOfHadj_img/hadj-stage1.png";
import img2 from "../../../../../public/assets/stepsOfHadj_img/hadj-stage2.png";
import img3 from "../../../../../public/assets/stepsOfHadj_img/hadj-stage3.png";
import img4 from "../../../../../public/assets/stepsOfHadj_img/hadj-stage4.png";
import img5 from "../../../../../public/assets/stepsOfHadj_img/hadj-stage5.png";

const StepsHajjSection = () => {
  return (
    <section className={scss.Main}>
      <div className={scss.pre_main}>
      <div className="container">
        <div className={scss.content}>
          <h1>Столпы хаджа и обязательные действия</h1>

          <div className={scss.block_content}>

            <div className={scss.block}>
              <h2>Хадж: порядок <br /> исполнения</h2>

              <Image src={img1} alt="" width={700} height={300}/>

              <p>Под Ихрамом <br /> подразумевается первое <br /> действие...</p>
            </div>

            <div className={scss.block2}>
              <h2>Ихрам</h2>

              <Image src={img2} alt="" width={700} height={300}/>

              <p>Под Ихрамом <br /> подразумевается первое <br /> действие...</p>
            </div>

            <div className={scss.block3}>
              <h2>Арафа</h2>

              <Image src={img3} alt="" width={700} height={300}/>

              <p>Одним из обязательных <br /> столпов хаджа...</p>
            </div>

            <div className={scss.block4}>
              <h2>Таваф</h2>

              <Image src={img4} alt="" width={700} height={300}/>

              <p>Что касается такого <br /> ритуала, как Таваф...</p>
            </div>

            <div className={scss.block5}>
              <h2>Са’й</h2>

              <Image src={img5} alt="" width={700} height={300}/>

              <p>Что касается такого <br /> ритуала, как Таваф...</p>
            </div>

          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default StepsHajjSection; 