import React from "react";
import styles from "./SliderRev.module.css";

const ReviewsCard = ({ name, city, text, imgSrc }) => {
  return (
    <>
      <div className={styles.reviews_card__top}>
        <div className={styles.reviews_card__img}>
          <img src={imgSrc} alt={name} />
        </div>
        <div className={styles.reviews_card__text}>
          <h2>{name}</h2>
          <p>{city}</p>
        </div>
      </div>
      <div className={styles.reviews_card__bottom}>
        <p>{text}</p>
      </div>
    </>
  );
};

export default ReviewsCard;
