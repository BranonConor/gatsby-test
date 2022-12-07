import React from "react";
import "../../assets/styles/globalStyles.scss";

export const Layout = (props) => {
  const { children } = props;
  return <main>{children}</main>;
};
