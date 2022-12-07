import React from "react";
import * as styles from "./CardContainer.module.scss";

export const CardContainer = (props) => {
  const { children } = props;
  return <div className={styles.CardContainer}>{children}</div>;
};
