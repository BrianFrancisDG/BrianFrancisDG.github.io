import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <h1>my picture goes here</h1>
    </div>
    <h1>Name Goes here</h1>
    <Link to="/page-2/">Go to page 2 (Links to Github, LinkedIn, R?)</Link>
    <a href="https://github.com/BrianFrancisDG">Github</a>
  </Layout>
)

export default IndexPage
