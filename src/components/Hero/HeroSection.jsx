import React from "react";
import Navigation from "./Navigation";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.background_container}>
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="Hero768.png"
            className={styles.backgroundImage}
          />
          <img src="Hero.png" alt="" className={styles.backgroundImage} />
        </picture>
      </div>
      <div className={styles.contentWrapper}>
        <Navigation />
        <h1 className={styles.heroTitle}>
          Говорят, никогда не поздно сменить профессию
        </h1>
        <p className={styles.heroSubtitle}>
          Сделай круто тестовое задание и у тебя получится
        </p>
        <button className={styles.ctaButton}>Проще простого!</button>
      </div>
    </section>
  );
};

export default HeroSection;
