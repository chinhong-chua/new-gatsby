import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx' 
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
    return(
        // <Layout pageTitle="Super Cool Blog Posts">
        //     <p>My blog post content will go here (eventually).</p>
        // </Layout>
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt}></GatsbyImage>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}
// console.log(Object.getOwnPropertyDescriptors(BlogPost));
// console.log(BlogPost)

// highlight-start
// export const query = graphql`
//   query ($id: String) {
//     mdx(id: {eq: $id}) {
//       frontmatter {
//         title
//         date(formatString: "MMMM D, YYYY")
//       }
//       body
//     }
//   }
// `
export const query = graphql`
  query($slug: String) {
    mdx(slug: {eq: $slug}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
// highlight-end


export default BlogPost