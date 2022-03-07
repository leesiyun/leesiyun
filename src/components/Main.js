import React from "react";
import { MDXProvider } from "@mdx-js/react";
import * as styles from "./Main.module.css";
import PageTitle from "./PageTitle";

const Main = ({ pageContent, pageIcon, pageTitle }) => {
  return (
    <MDXProvider
      components={{
        h1: (props) => <h1 {...props} className={styles.h1}></h1>,
      }}
    >
      <div className={styles.pageIcon}>{pageIcon}</div>
      <PageTitle pageTitle={pageTitle} />
      <div>{pageContent}</div>
    </MDXProvider>
  );
};

export default Main;
