import * as React from 'react'
import { graphql } from 'gatsby' 
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const ALLPost = ( {data} ) => {
    return (
        <Layout>
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