import React from "react";

import styles from "./ThirdBlock.module.css";

const ThirdBlock = () => {
  return (
    <div className={styles.ThirdBlock_container}>
      <div className={styles.ThirdBlock_left}>
        <h1>Круто, ты дошел до третьего блока</h1>
        <p>
          63% опрошенных пользовались кредитами из-за того, что не могли покрыть
          непредвиденные расходы свыше 15 000 ₽.
        </p>
        <p>
          Доступ к заработанным деньгам помогает отказаться от кредитов и
          экономить деньги на процентах и штрафах.
        </p>
      </div>
      <div className={styles.ThirdBlock_right}>
        <picture>
          <img src="Phone.png" alt="Phone" />
        </picture>
      </div>
    </div>
  );
};

export default ThirdBlock;
