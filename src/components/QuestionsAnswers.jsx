// src/components/QuestionsAnswers.js
import React, { useState } from "react";
import { useGetQuestionsQuery } from "../redux/questionsApi";
import AccordionItem from "./AccordionItem";
import styles from "./QuestionsAnswers.module.css";

const QuestionsAnswers = () => {
  const [openId, setOpenId] = useState(null);
  const { data, error, isLoading } = useGetQuestionsQuery();

  const handleToggle = (id) => {
    setOpenId(id === openId ? null : id);
  };

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Произошла ошибка: {error.message}</p>;

  return (
    <div className={styles.QuestionsAnswers_container}>
      <div className={styles.QuestionsAnswers_heading}>
        <h1>Вопросы и ответы</h1>
      </div>
      <div className={styles.QuestionsAnswers_questions}>
        <ul>
          {data &&
            data.map((item, index) => (
              <AccordionItem
                key={item.id } 
                header={item.header}
                body={item.body}
                isOpen={index === openId}
                onToggle={() => handleToggle(index)}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionsAnswers;
