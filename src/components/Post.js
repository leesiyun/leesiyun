import React from "react"
import { MDXProvider } from "@mdx-js/react"
import * as styles from "./Post.module.css"

function Post ({ post, postIcon, pageTitle }) {
    return (
        <MDXProvider
         components={{
             h1: (props) =>  <h1 {...props} className={styles.h1}></h1>,

         }}
        >
            <div className={styles.postIcon}>{postIcon}</div>
            <h1 className={styles.postTitle}>{pageTitle}</h1>
            <div>{post}</div>
        </MDXProvider>
    )
}

export default Post
