import * as React from 'react'
import { graphql } from 'gatsby' 
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Layout'

const ALLPost = ( {data} ) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
query($id: String) {
  mdx(id: {eq: $id}) {
    body
    frontmatter {
      title
      }
    }
}
`

export default ALLPost