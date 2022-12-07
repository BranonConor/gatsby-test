import React from "react";
import * as styles from "./Card.module.scss";

export const Card = (props) => {
  // destructure the props for ease of use
  const { title, description } = props;

  return (
    <div className={styles.Card}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
