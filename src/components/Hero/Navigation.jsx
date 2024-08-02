import React, { useState, useEffect } from "react";

import { FaAngleRight } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

import styles from "./HeroSection.module.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (e) => {
    if (isMenuOpen && !e.target.closest(`.${styles.navContent}`)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <nav className={styles.navigationWrapper}>
      <div className={styles.logoWrapper}>
        <div className={styles.activeDot} />
        <div className={styles.inactiveDot} />
      </div>
      <div className={styles.navContent}>
        <div className={styles.brandName}>testLab</div>
        <ul
          className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}
        >
          <div className={styles.menu_logo}>
            <div className={styles.activeDot} />
            <div className={styles.inactiveDot} />
            <h1>testLab</h1>
            <RxCross1 />
          </div>
          <li>
            <a href="#how-it-works">Как это работает</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#third-block">3-й блок</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#questions-answers">Вопросы и ответы</a>
            <FaAngleRight />
          </li>
          <li>
            <a href="#form">Форма</a>
            <FaAngleRight />
          </li>
        </ul>
        <button className={styles.burgerMenu} onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
