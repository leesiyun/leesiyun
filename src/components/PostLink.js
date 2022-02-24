import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug}>
      <div>
        <span>{post.frontmatter.icon}</span>
        <span>{post.frontmatter.title}</span> 
      </div>
    </Link>
  </div>
)
export default PostLink