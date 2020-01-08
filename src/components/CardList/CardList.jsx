import React from "react";
import styles from "./cardList.module.css";
import Card from "./Card/Card";

const CardList = ({ monsters }) => {
  return (
    <div className={styles.cardList}>
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
