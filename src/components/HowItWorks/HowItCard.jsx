import React from "react";

import styles from "./HowItWorks.module.css";

const HowItCard = ({ imgSrc, heading, text }) => {
  return (
    <li>
      <div className={styles.HowItWorks_listItem__img}>
        <img src={imgSrc} alt={heading} />
      </div>
      <div className={styles.HowItWorks_listItem__text}>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </li>
  );
};

export default HowItCard;
