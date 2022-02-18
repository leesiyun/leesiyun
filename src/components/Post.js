import React from "react"
import { MDXProvider } from "@mdx-js/react"
import * as styles from "./Post.module.css"

function Post ({ post }) {
    return (
        <MDXProvider
         components={{
             h1: styles.H1,
         }}
        >
            {post}
        </MDXProvider>
    )
}

export default Post
