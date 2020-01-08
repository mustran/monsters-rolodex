import React from "react";
import styles from "./card.module.css";

const Card = ({ monster, imageKey }) => {
  return (
    <div className={styles.cardContainer}>
      <img
        alt="monster"
        src={`https://robohash.org/${imageKey}/?set=set2&size=180x180`}
      />
      <h1>{monster.name}</h1>
      <p style={{ textAlign: "center" }}>{monster.email}</p>
    </div>
  );
};

export default Card;
