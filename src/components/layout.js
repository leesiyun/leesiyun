import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
 } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            SIYUN
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/projects" className={navLinkText}>
                            Projects
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/learn" classNAme={navLinkText}>
                            Learn
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" classNAme={navLinkText}>
                            Blog
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/carrer" classNAme={navLinkText}>
                            Carrer
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout