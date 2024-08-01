import React, { useState } from "react";
import styles from "./HeroSection.module.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navigationWrapper}>
      <div className={styles.logoWrapper}>
        <div className={styles.activeDot} />
        <div className={styles.inactiveDot} />
      </div>
      <div className={styles.navContent}>
        <div className={styles.brandName}>testLab</div>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}>
          <li>Как это работает</li>
          <li>3-й блок</li>
          <li>Вопросы и ответы</li>
          <li>Форма</li>
        </ul>
        <button className={styles.burgerMenu} onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
