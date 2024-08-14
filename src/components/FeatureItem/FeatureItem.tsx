import { Feature } from "../../utils/types";
import styles from "./FeatureItem.module.scss";

type FeatureItemProps = {
  feature: Feature;
};

const FeatureItem = ({ feature }: FeatureItemProps) => {
  return (
    <section className={styles.featureItem}>
      <div className={styles.featureIconDiv}>
        <img
          src={feature.imgPath}
          alt={`${feature} icon`}
          className={styles.featureIcon}
        />
      </div>
      <h3 className={styles.title}>{feature.title}</h3>
      <p className={styles.desc}>{feature.text}</p>
    </section>
  );
};

export default FeatureItem;
