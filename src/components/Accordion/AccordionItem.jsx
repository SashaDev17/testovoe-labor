import React from "react";

import { Plus, Cross } from "../../icons/AccordionIcons";

import styles from "./QuestionsAnswers.module.css";

const AccordionItem = ({ header, body, isOpen, onToggle }) => {
  return (
    <li className={styles.QuestionsAnswers_questions__item} onClick={onToggle}>
      <div className={styles.questions_header__items}>
        <h1 className={styles.questions_item__header}>{header}</h1>
        {isOpen ? (
          <Cross className={styles.questions_header__icon} />
        ) : (
          <Plus className={styles.questions_header__icon} />
        )}
      </div>
      <div
        className={`${styles.questions_item__collapse} ${
          isOpen ? styles.questions_item__collapse_open : ""
        }`}
      >
        <div className={styles.questions_item__body}>
          <p>{body}</p>
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
