
// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
// Step 2: Define your component
const AboutPage = () => {
  return (
    // <main>
    //   <title>About Me</title>
    //   <h1>About Me</h1>
    //   <Link to="/">Back to Home</Link>
    //   <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    // </main>
    <Layout pageTitle="About ME">
        <p>Hi, Im creater of this site</p>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage