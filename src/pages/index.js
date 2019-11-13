import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'
import scrollToElement from "scroll-to-element"
import { FaRegCircle } from 'react-icons/fa'

import Layout from "../components/layout"
// import ArrowIcon from "../components/arrowIcon/arrow-icon"
// import ArrowIconFixed from "../components/arrowIconFixed/arrow-icon-fixed"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Web development" />
    <section id="welcome">
      <Fade bottom cascade>
        <div>
          <h1>Building successful and profitable products is difficult. We make it simple.</h1>
          <h3>Whether you're an early stage startup or an established company - we provide our clients technical and business expertise they need to succeed.</h3>
          <br />
          <div
            className="hero-button"
            onClick={() => scrollToElement('#our-work', { align: 'top', duration: 1000 })}
          >
            See our work
          </div>
        </div>
      </Fade>
    </section>
    <section id="what-we-do">
      <a href="what-we-do" />
      <Fade bottom cascade>
        <div className="subsection-left">
          <h1>What we do</h1>
          <div className="services">
            <h3>› deliver measurable results by showcasing working and improved product</h3>
            <h3>› ensure effective and transparent communication that keeps everyone on the same page</h3>
            <h3>› focus on achieving client’s business goals and bringing value</h3>
          </div>
          <div className="subsection-right top-spacing">
            <h2>We cover a wide range of skills</h2>
            <h3 className="subsection-text">
              We are experts in <b>user experience development</b>, <b>performance optimization</b>, and <b>frontend architecture design</b>. 
              Besides our speciality, we can also help you with user research, product development, development process optimization, and much more.
            </h3>
          </div>
        </div>
      </Fade>
    </section>
    <section id="how-we-do-it">
      <Fade bottom cascade>
        <div className="subsection-right">
          <h1>Why us?</h1>
          <h3>
            Most projects end up with similar problems. 
            Application <b>performance</b>, development <b>process</b>, product <b>delivery speed</b> and customer <b>happiness</b>. 
            Our technical solution always provides the best balance of those key ingredients and maximizes your chance of success.
          </h3>
          <div className="subsection-left top-spacing">
            <div className="why-us-questions">
              <h2>If you recognize yourself in some of these questions, <a href="#get-in-touch">contact us</a>.</h2>
              <h3><FaRegCircle />Need your C-Level technology lead?
              <br /><FaRegCircle />Need a technology review or overhaul?
              <br /><FaRegCircle />Need workflow and process optimization?
              <br /><FaRegCircle />Need a strategy to move forward?
              </h3>
            </div>
          </div>
        </div>
      </Fade>
    </section>
    <section id="our-work">
      <Fade bottom cascade>
        <div className="subsection-left">
          <h1>Our work</h1>
          <div className="project ck-marketplace">
            <div className="project-description">
              <h3>Credit Karma - Marketplace</h3>
              <p>
                Credit Karma is an $4 billion personal finance startup with over 88 million members . It offers free credit score reports, credit cards, personal loans shopping, tax filing and other financial products.
              </p>
              <Link to="/marketplace-case-study">Case study</Link>
            </div>
            <div className="project-img-wrapper">
              <img src="https://images.squarespace-cdn.com/content/v1/5b5b57a1f8370a099b9bba36/1561385196174-KXQBGXEFO0NIGT9521QV/ke17ZwdGBToddI8pDm48kAccOGYkcTR9GniJVKNNku57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0oycmklwMHPwSb2Cr-KYzbrvqEPTnkt7KVjE1iP6-PxADtzJKPXOWLVqbUqkmJOxBA/Screen%2BShot%2B2019-06-24%2Bat%2B16.03.35.jpg?format=2500w" />
            </div>
          </div>
          <div className="project movieo">
            <div className="project-description">
              <h3>Movieo</h3>
              <p>
                We love movies, but finding great ones to watch is usually a hassle. We had been searching for a simple and well-designed movie-browsing interface, yet we couldn't find one. Therefore, we decided to create one ourselves.
              </p>
              <Link to="/movieo-case-study">Case study</Link>
            </div>
            <div className="project-img-wrapper">
              <img src="https://images.squarespace-cdn.com/content/v1/5b5b57a1f8370a099b9bba36/1533443221183-C2SG5EAG4D9ZMZLPAVIE/ke17ZwdGBToddI8pDm48kDIqxffH9PldCQsyJA_eaPMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcsWhdrL4uT7Qobf16lxKkOKArIhW12yMy75CYh6XOkxLmIuhF1ggn2ppT7KI4buve/movieo-hero.jpg?format=1500w" />
            </div>
          </div>
        </div>
      </Fade>
    </section>
    <section id="get-in-touch">
      <Fade bottom>
        <h1>Get in touch</h1>
        <h3>Tell us more about your project and send us an email at <b>sinisa@codewellstudio.com</b></h3>
      </Fade>
    </section>
    {/* <ArrowIconFixed anchors={['#welcome', '#what-we-do', '#how-we-do-it', '#our-work', '#get-in-touch']} /> */}
  </Layout>
)

export default IndexPage
