import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blog">
            <ul>
            {
                data.allMdx.nodes.map( (node) => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/blog/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                    </article>
                ))
            }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx {
            nodes {
                frontmatter {
                    title
                }
                id
                slug
            }
        }
    }
`

export default BlogPage