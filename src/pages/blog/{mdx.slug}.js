import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx' 

const BlogPost = ({data}) => {
    return(
        // <Layout pageTitle="Super Cool Blog Posts">
        //     <p>My blog post content will go here (eventually).</p>
        // </Layout>
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}
// console.log(Object.getOwnPropertyDescriptors(BlogPost));
// console.log(BlogPost)

// highlight-start
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`
// highlight-end


export default BlogPost