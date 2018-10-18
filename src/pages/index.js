import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to this Gatsby site.</p>
    <p>My name is Michelle and I'm excited to do this freeCodeCamp remote Hackathon with the Montreal chapter participating at the Expedia office in Old Port!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
