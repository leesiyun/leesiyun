import React from "react";
import * as styles from "./Main.module.css";

const PageTitle = ({ pageTitle }) => {
  return pageTitle !== "Home" ? (
    <h1 className={styles.pageTitle}>{pageTitle}</h1>
  ) : null;
};
export default PageTitle;
