import React from "react";
import styles from "./HeroSection.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigationWrapper}>
      <div className={styles.logoWrapper}>
        <div className={styles.activeDot} />
        <div className={styles.inactiveDot} />
      </div>
      <div className={styles.navContent}>
        <div className={styles.brandName}>testLab</div>
        <ul className={styles.navLinks}>
          <li>Как это работает</li>
          <li>3-й блок</li>
          <li>Вопросы и ответы</li>
          <li>Форма</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
