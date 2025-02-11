import Image from "next/image";
import { warningsData } from "../../data/content";
import styles from "./styles.module.scss";

export const WarningsSection = () => {
  return (
    <div className={styles.warningsContent}>
      <h1>Конул бурунуз!</h1>
      <div className={styles.warningsList}>
        {warningsData.map((warning) => (
          <div key={warning.id} className={styles.warningItem}>
            <div className={styles.warningImageWrapper}>
              <Image
                src={warning.image}
                alt={warning.title}
                width={300}
                height={200}
              />
            </div>
            <div className={styles.warningInfo}>
              <h3>{warning.title}</h3>
              <p>{warning.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
