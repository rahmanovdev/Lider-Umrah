import React from "react";
import scss from "./TariffsSection.module.scss"

const TariffsSection = () => {
  return <section className={scss.Main}>
    <div className="container">
      <div className={scss.content}>
        <h1>Tariffs Section</h1>
      </div>
    </div>
  </section>;
};

export default TariffsSection; 
