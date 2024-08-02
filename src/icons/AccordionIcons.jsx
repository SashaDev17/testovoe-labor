import React from "react";

import styles from '../components/Accordion/QuestionsAnswers.module.css'

export const Plus = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${styles.icon} ${className}`} // Добавьте класс для применения стилей
  >
    <path
      d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z"
      className={styles.path}
    />
    <circle cx="12" cy="12" r="11" strokeWidth={2} className={styles.circle} />
  </svg>
);

export const Cross = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${styles.icon} ${className}`}
  >
    <path
      d="M16.2426 14.8286L13.4142 12.0002L16.2426 9.17175C16.4302 8.98421 16.5355 8.72986 16.5355 8.46464C16.5355 8.19942 16.4302 7.94507 16.2426 7.75753C16.0551 7.57 15.8008 7.46464 15.5355 7.46464C15.2703 7.46464 15.016 7.57 14.8284 7.75753L12 10.586L9.17157 7.75753C8.98404 7.57 8.72968 7.46464 8.46447 7.46464C8.19925 7.46464 7.9449 7.57 7.75736 7.75753C7.56982 7.94507 7.46447 8.19942 7.46447 8.46464C7.46447 8.72986 7.56982 8.98421 7.75736 9.17175L10.5858 12.0002L7.75736 14.8286C7.56982 15.0161 7.46447 15.2705 7.46447 15.5357C7.46447 15.8009 7.56982 16.0553 7.75736 16.2428C7.9449 16.4304 8.19925 16.5357 8.46447 16.5357C8.72968 16.5357 8.98404 16.4304 9.17157 16.2428L12 13.4144L14.8284 16.2428C15.016 16.4304 15.2703 16.5357 15.5355 16.5357C15.8008 16.5357 16.0551 16.4304 16.2426 16.2428C16.4302 16.0553 16.5355 15.8009 16.5355 15.5357C16.5355 15.2705 16.4302 15.0161 16.2426 14.8286Z"
      className={styles.path}
    />
    <circle cx="12" cy="12" r="11" className={styles.circle} stroke-width="2" />
  </svg>
);
