import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CreditKarmaCaseStudy = () => (
  <Layout>
    <SEO title="Marketplace Case Study" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CreditKarmaCaseStudy
