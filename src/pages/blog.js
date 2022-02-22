import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostLink from "../components/PostLink"

const BlogPage = ({     data: {
    allMdx: { nodes },
},
}) => {
const Posts = nodes
    .filter(node => node.frontmatter.folder === "blog")
    .map(node => <PostLink key={node.id} post={node} />)
return (
    <Layout pageTitle="Blog">
        <ul>
            <div>{Posts}</div>
        </ul>
    </Layout>
)
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    title
                    slug
                    date
                    folder
                }
                id
                slug
            }
        }
    }
`

export default BlogPage