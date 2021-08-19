import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () =>{
    return(
       <Layout pageTitle="Home Page">
           <p>This is my Andy Reborn.</p>
           <StaticImage alt="Andy Reborn" src="https://scontent.fsin4-1.fna.fbcdn.net/v/t1.18169-9/10492093_10201389911348092_2194366049507572303_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=yQg3wXogtJgAX-XyBEy&_nc_oc=AQliMkaqAz7HsWbpmZ-g6ltDIcSCT3Jqunddf5aR1YVdNvH7wW5F34s3a03m20XtkPA&tn=WIm7ESgSpDUSivSK&_nc_ht=scontent.fsin4-1.fna&oh=c983f3517e098e8ccdc73866b585f968&oe=6143169D"></StaticImage>
       </Layout>
    )
}

export default IndexPage
