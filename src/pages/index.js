import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'
import scrollToElement from "scroll-to-element"
import { FaRegCircle } from 'react-icons/fa'

import Layout from "../components/layout"
// import ArrowIcon from "../components/arrowIcon/arrow-icon"
// import ArrowIconFixed from "../components/arrowIconFixed/arrow-icon-fixed"
import SEO from "../components/seo"

import solarisbankProjectImg from "../images/sb_services.png"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Web development" />
    <section id="welcome">
      <Fade bottom cascade>
        <div>
          <h1>Building successful and profitable products is difficult. I make it simple.</h1>
          <h3 className="subtitle">Whether you're an early stage startup or an established company - I provide my clients with technical and business expertise they need to succeed.</h3>
          <br />
          <div
            className="hero-button"
            onClick={() => scrollToElement('#our-work', { align: 'top', duration: 1000 })}
          >
            See my work
          </div>
        </div>
      </Fade>
    </section>
    <section id="what-we-do">
      <a href="what-we-do" />
      <Fade bottom cascade>
        <div className="subsection-left">
          <h1>What I do</h1>
          <div className="services">
            <h3>› <b>Deliver measurable results</b> by showcasing working and improved product</h3>
            <h3>› Ensure <b>effective and transparent communication</b> that keeps everyone on the same page</h3>
            <h3>› Focus on <b>achieving client’s business goals</b> and bringing value</h3>
          </div>
          <div className="subsection-right top-spacing">
            <h3 className="subsection-text">
              I am an expert in <b>UI & UX development</b>, <b>performance optimization</b>, <b>frontend architecture and infrastructure</b>. 
            </h3>
            <h3 className="subsection-text">
              Besides my core skills, I can help you with backend API, product management and agile process optimization.
            </h3>
          </div>
        </div>
      </Fade>
    </section>
    <section id="how-we-do-it">
      <Fade bottom cascade>
        <div className="subsection-right">
          <h1>Why me?</h1>
          <h3>
            Most projects end up with similar problems. 
            Application <b>performance</b>, development <b>process</b>, product <b>delivery speed</b> and customer <b>happiness</b>. 
          </h3>
          <h3>
            My technical solution always provides the best balance of those key ingredients and <b>maximizes your chance of success</b>.
          </h3>
          <div className="subsection-left top-spacing">
            <div className="why-us-questions">
              <h2>If you recognize yourself in some of these questions, <a href="#get-in-touch">get in touch</a>.</h2>
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
          <h1>My work</h1>
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
          <div className="project backoffice">
            <div className="project-description">
              <h3>Solarisbank - Backoffice</h3>
              <p>
              solarisBank is a Berlin-based 250-person fintech company which took them less than three years to build the banking-as-a-platform, scale up a team, and raise almost €100m in funding rounds with Arvato, BBVA, Visa, Lakestar and other.
              </p>
              <Link to="/solarisbank-case-study">Case study</Link>
            </div>
            <div className="project-img-wrapper">
              <img
                src={solarisbankProjectImg}
                alt="solarisBank - Case Study"
              />
            </div>
          </div>
          <div className="project movieo">
            <div className="project-description">
              <h3>Movieo</h3>
              <p>
                My friends and I love movies, but finding great ones to watch is usually a hassle. We had been searching for a simple and well-designed movie-browsing interface, yet we couldn't find one. Therefore, we decided to create one ourselves.
              </p>
              <Link to="/movieo-case-study">Case study</Link>
            </div>
            <div className="project-img-wrapper">
              <img src="https://images.squarespace-cdn.com/content/v1/5b5b57a1f8370a099b9bba36/1533443221183-C2SG5EAG4D9ZMZLPAVIE/ke17ZwdGBToddI8pDm48kDIqxffH9PldCQsyJA_eaPMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcsWhdrL4uT7Qobf16lxKkOKArIhW12yMy75CYh6XOkxLmIuhF1ggn2ppT7KI4buve/movieo-hero.jpg?format=1500w" />
            </div>
          </div>
          {/* <div className="subsection-center">
            <div
              className="hero-button load-more-projects"
              // onClick={() => loadMoreProjects}
            >
              Load more
            </div>
          </div> */}
        </div>
      </Fade>
    </section>
    <section id="get-in-touch">
      <Fade bottom>
        <h1>Get in touch</h1>
        <h3>Tell me more about your project and send me an email at <b>sinisa@codewell.studio</b></h3>
      </Fade>
    </section>
    {/* <ArrowIconFixed anchors={['#welcome', '#what-we-do', '#how-we-do-it', '#our-work', '#get-in-touch']} /> */}
  </Layout>
)

export default IndexPage
