import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
      <h1>Hey there,</h1>
      <h2>I'm BRIAN</h2>
      <h3>Welcome.</h3>
    </div>
    
    {/* <Link to="/page-2/">Github, LinkedIn)</Link> */}
    <div>
      <a href="https://www.linkedin.com/in/brian-francis-de-guzman">LinkedIn</a>
      <br />
      <a href="https://github.com/BrianFrancisDG">Github</a>
    </div>
  </Layout>
)

export default IndexPage
