import FeatureItem from "../../components/FeatureItem/FeatureItem";
import { Feature } from "../../utils/types";
import styles from "./Home.module.scss";

const Home = () => {
  const features: Feature[] = [
    {
      imgPath: "/assets/icon-chat.png",
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      imgPath: "/assets/icon-money.png",
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!",
    },
    {
      imgPath: "/assets/icon-security.png",
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <section className={styles.heroContent}>
          <h2 className={styles.srOnly}>Promoted Content</h2>
          <p className={styles.subtitle}>No fees.</p>
          <p className={styles.subtitle}>No minimum deposit.</p>
          <p className={styles.subtitle}>High interest rates.</p>
          <p className={styles.text}>
            Open a savings account with Argent Bank today!
          </p>
        </section>
      </div>
      <section className={styles.features}>
        <h2 className={styles.srOnly}>Features</h2>
        {features.map((feature, index) => (
          <FeatureItem feature={feature} key={index} />
        ))}
      </section>
    </div>
  );
};

export default Home;
