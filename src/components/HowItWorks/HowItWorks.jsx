import React from "react";
import { useGetHowItWorksQuery } from "../../redux/howItWorksApi";
import HowItCard from "./HowItCard";
import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
  const { data, error, isLoading } = useGetHowItWorksQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.HowItWorks_container} id="how-it-works">
      <div className={styles.HowItWorks_heading__container}>
        <h1>Как это работает</h1>
      </div>
      <div className={styles.HowItWorks_items}>
        <ul className={styles.HowItWorks_listItems}>
          {data?.map((item) => {
            return (
              <li key={item.id}>
                <div className={styles.HowItWorks_listItem__img}>
                  <img src={item.imgSrc} alt="Waiting" />
                </div>
                <div className={styles.HowItWorks_listItem__text}>
                  <h2>{item.heading}</h2>
                  <p>{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;

// import React from "react";
// import { useGetHowItWorksQuery } from "../../redux/howItWorksApi";
// import HowItCard from "./HowItCard";
// import styles from "./HowItWorks.module.css";

// const HowItWorks = () => {
//   const { data, error, isLoading } = useGetHowItWorksQuery();

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div className={styles.HowItWorks_container} id="how-it-works">
//       <div className={styles.HowItWorks_heading__container}>
//         <h1>Как это работает</h1>
//       </div>
//       <div className={styles.HowItWorks_items}>
//         <ul className={styles.HowItWorks_listItems}>
//           {data?.map((item) => { return (
//             <HowItCard
//               key={item.id}
//               imgSrc={item.imgSrc}
//               heading={item.heading}
//               text={item.text}
//             />
//           )})}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;
