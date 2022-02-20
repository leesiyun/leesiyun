import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './Layout.module.css'
import Post from "./Post"

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={styles.container}>
            <title>{pageTitle}</title>
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
                        <Link to="/learn" classNAme={styles.navLinkText}>
                            Learn
                        </Link>
                    </li>
                    <li className={styles.navLinkItem}>
                        <Link to="/blog" classNAme={styles.navLinkText}>
                            Blog
                        </Link>
                    </li>
                    <li className={styles.navLinkItem}>
                        <Link to="/career" classNAme={styles.navLinkText}>
                            Career
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Post post={children} />
            </main>
        </div>
    )
}

export default Layout