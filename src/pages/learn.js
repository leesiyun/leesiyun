import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const LearnPage = ({ data }) => {
    return (
        <Layout>
            <ul>
            {
                data.allMdx.nodes.map( (node) => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`${node.frontmatter.slug}`}>
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
                    slug
                }
                id
                slug
            }
        }
    }
`

export default LearnPage