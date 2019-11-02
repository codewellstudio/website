import React from "react"
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Code well studio" />
    <section id="welcome">
      <Fade bottom cascade>
        <div>
          <h1>Building successful and profitable products is difficult. We make it simple.</h1>
          <h3>Whether you're a Fortune 500 or a startup in stealth mode - we provide our clients the creative, technical and business expertise they need to succeed.</h3>
        </div>
      </Fade>
    </section>
    <section id="what-we-do">
      <Fade bottom cascade>
        <div className="subsection-left">
          <h1>What we do</h1>
          <div className="services">
            <h3>› deliver measurable results by showcasing working and improved product</h3>
            <h3>› ensure effective and transparent communication that keeps everyone on the same page</h3>
            <h3>› focus on achieving client’s business goals and bringing value</h3>
          </div>
        </div>
      </Fade>
    </section>
    <section id="how-we-do-it">
      <Fade bottom cascade>
        <div className="subsection-right">
          <h1>How we do it?</h1>
          <h3>
            Most projects end up with similar problems. 
            Application <b>performance</b>, development <b>process</b>, product <b>delivery speed</b> and customer <b>happiness</b>. 
            Our technical solution always provides the best balance of those key ingredients and maximizes your chance of success.
          </h3>
          <div className="subsection-left top-spacing">
            <h2>We cover a wide range of skills</h2>
            <p>
              We are experts in user experience development, performance optimization, and frontend architecture design. 
              Besides our speciality, we can also help you with user research, product development, development process optimization, and much more.
            </p>
          </div>
        </div>
      </Fade>
    </section>
    <section id="section3">
      <Fade bottom>
        <h1>Hi, I'm Jane Doe</h1>
        <h3>I'm creating noice web experiences for the next generation of consumer-facing companies</h3>
      </Fade>
    </section>
    <section id="section4">
      <Fade bottom>
        <h1>Hi, I'm Jane Doe</h1>
        <h3>I'm creating noice web experiences for the next generation of consumer-facing companies</h3>
      </Fade>
    </section>
  </Layout>
)

export default IndexPage
