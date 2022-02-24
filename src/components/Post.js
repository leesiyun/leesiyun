import React from "react"
import { MDXProvider } from "@mdx-js/react"
import * as styles from "./Post.module.css"

function Post ({ post, postIcon }) {
    return (
        <MDXProvider
         components={{
             h1: (props) =>  <h1 {...props} className={styles.h1}></h1>,

         }}
        >
            <div>{postIcon}</div>
            <div>{post}</div>
        </MDXProvider>
    )
}

export default Post
