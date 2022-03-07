import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "./Layout.module.css";
import Main from "./Main";

const Layout = ({ pageTitle, children, pageIcon, pageDate }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={styles.container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLinkItem}>
            <Link to="/" className={styles.navLinkText}>
              SIYUN
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/projects" className={styles.navLinkText}>
              Projects
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/learn" className={styles.navLinkText}>
              Learn
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/blog" className={styles.navLinkText}>
              Blog
            </Link>
          </li>
          <li className={styles.navLinkItem}>
            <Link to="/career" className={styles.navLinkText}>
              Career
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Main
          pageIcon={pageIcon}
          pageTitle={pageTitle}
          pageDate={pageDate}
          pageContent={children}
        />
      </main>
    </div>
  );
};

export default Layout;
