import React from "react";
import * as styles from "./Main.module.css";
import styled from "styled-components";

const Title = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`;

const PageTitle = ({ pageTitle }) => {
  return pageTitle !== "Home" ? (
    <Title className={styles.pageTitle}>{pageTitle}</Title>
  ) : null;
};
export default PageTitle;
