import React from "react";

import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <div className={styles.HowItWorks_container}>
      <div className={styles.HowItWorks_heading__container}>
        <h1>Как это работает</h1>
      </div>
      <div className={styles.HowItWorks_items}>
        <ul className={styles.HowItWorks_listItems}>
          <li>
            <div className={styles.HowItWorks_listItem__img}>
              <img src="Waiting.png" alt="" />
            </div>
            <div className={styles.HowItWorks_listItem__text}>
              <h2>Прочитай задание внимательно</h2>
              <p>Думаю у тебя не займет это больше двух-трех минут</p>
            </div>
          </li>
          <li>
            <div className={styles.HowItWorks_listItem__img}>
              <img src="Waiting.png" alt="" />
            </div>
            <div className={styles.HowItWorks_listItem__text}>
              <h2>Прочитай задание внимательно</h2>
              <p>Думаю у тебя не займет это больше двух-трех минут</p>
            </div>
          </li>
          <li>
            <div className={styles.HowItWorks_listItem__img}>
              <img src="Waiting.png" alt="" />
            </div>
            <div className={styles.HowItWorks_listItem__text}>
              <h2>Прочитай задание внимательно</h2>
              <p>Думаю у тебя не займет это больше двух-трех минут</p>
            </div>
          </li>
          <li>
            <div className={styles.HowItWorks_listItem__img}>
              <img src="Waiting.png" alt="" />
            </div>
            <div className={styles.HowItWorks_listItem__text}>
              <h2>Прочитай задание внимательно</h2>
              <p>Думаю у тебя не займет это больше двух-трех минут</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
