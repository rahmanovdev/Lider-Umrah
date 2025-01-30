import React from "react";
import scss from "./TariffsSection.module.scss"
import EkonomCard from "@/components/ui/cards/tours_cards/ekonom_card/EkonomCard";
import ComfordCard from "@/components/ui/cards/tours_cards/comfort_card/ComfordCard";
import ComfortPlusCard from "@/components/ui/cards/tours_cards/comfortPlus_card/ComfortPlusCard";

const TariffsSection = () => {
  return <section className={scss.Main}>
    <div className="container">
      <div className={scss.content}>
        <h1>Тарифы</h1>

        <div className={scss.cards}>
          <EkonomCard/>
          <ComfordCard/>
          <ComfortPlusCard/>
        </div>
      </div>
    </div>
  </section>;
};

export default TariffsSection; 
