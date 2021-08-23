import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () =>{
    return(
       <Layout pageTitle="Home Page">
           <p>This is my home page.</p>
           <StaticImage alt="GreenField" src="../images/images.jfif"></StaticImage>
           {/* <StaticImage alt="Dog" src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"></StaticImage> */}
       </Layout>
    )
}

export default IndexPage
