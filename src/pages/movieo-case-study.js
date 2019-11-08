import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MovieoCaseStudy = () => (
  <Layout>
    <SEO title="Movieo Case Study" />
    <h1>Movieo case study</h1>
    <iframe
      src="https://sinisamikulic.com/movieo-case-study-1"
      style={{
        width: '100%',
        height: '291vh',
        border: 0,
      }}
    >
    </iframe>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MovieoCaseStudy
