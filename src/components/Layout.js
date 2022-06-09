import * as React from "react";
import * as styles from "./Layout.module.css";
import NavigationBar from "./NavigationBar";
import Main from "./Main";
import styled from "styled-components";

const StyledMain = styled.main`
  margin: 70px 100px 15px 50px;
  height: 100%;
`;

const Layout = ({ pageTitle, children, pageIcon, pageDate }) => {
  return (
    <div className={styles.container}>
      <NavigationBar pageTitle={pageTitle} />
      <StyledMain>
        <Main
          pageIcon={pageIcon}
          pageTitle={pageTitle}
          pageDate={pageDate}
          pageContent={children}
        />
      </StyledMain>
    </div>
  );
};

export default Layout;
