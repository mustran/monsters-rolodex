import React from "react";
import styles from "./cardList.module.css";
import Card from "./Card/Card";

const CardList = ({ monsters }) => {
  return (
    <div className={styles.cardList}>
      {monsters.map((monster, index) => (
        <Card key={monster.id} monster={monster} imageKey={index + 1}/>
      ))}
    </div>
  );
};

export default CardList;
