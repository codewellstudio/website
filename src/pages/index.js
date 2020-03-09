import React, { useState } from "react"
import { Link } from "gatsby"
import scrollToElement from "scroll-to-element"
import { FaRegCircle } from 'react-icons/fa'

import Layout from "../components/layout"
// import ArrowIcon from "../components/arrowIcon/arrow-icon"
import SEO from "../components/seo"

import solarisbankProjectImg from "../images/sb_services.png"
import "./index.css"

const IndexPage = () => {
  if (typeof window !== 'undefined') {
    window.location.replace("https://smikulic.com");
  }
  const [moreLoaded, setMoreLoaded] = useState(false)

  return (
    <Layout>
      <SEO title="Web Development" />
      <section id="welcome">
        <div>
          <h1>Building successful and profitable products is difficult. I make it simple.</h1>
          <h3 className="subtitle">Whether you're an early stage startup or an established company - I provide my clients with technical and business expertise they need to succeed.</h3>
          <br />
          <div
            className="hero-button"
            onClick={() => scrollToElement('#my-work', { align: 'top', duration: 1000 })}
          >
            See my work
          </div>
        </div>
      </section>
      <section id="about-me">
        <div className="subsection-left">
          <h1>Hi!</h1>
          <div className="services">
            <h3 className="profile-left">My name is Sinisa. After my degree in IT, I began developing web applications for local businesses. In 2012, I started a Boutique Web Development shop with my two friends and I was happy to work long into the night learning more about what I loved. My years of dedication and experience coupled with my passion for technology and business allow me to truly enjoy the work that I do.</h3>
            <img
              align="top"
              alt="Profile"
              className="profile-right"
              src="https://media.licdn.com/dms/image/C5603AQFWf2dHN8juSw/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=6OAMREuDd6ZxtOaIIq5taeTYc59E_-ZoM1vJlPp-tHk"
            />
            <h3>Various experience throughout Berlin startups has brought me to one of the highly successfull companies in San Francisco where I strived as a software engineer.</h3>
            <h3>My personal preference for remote work has prevailed and had brough me back home mid 2019 where I quickly launched a small Web Consultancy business - <i>Code Well Studio</i> - and now looking forward to provide my extensive experience to you!</h3>
            <h3>
              You can learn more about me and my work through my <a href="http://smikulic.me/" target="blank">Online CV</a>, <a href="https://github.com/smikulic" target="blank">Github portfolio</a>, <a href="https://medium.com/@sinisa.mikulic" target="blank">Medium articles</a> or just check out my <a href="javascript:void(0);" onClick={(e) => scrollToElement('#my-work', { align: 'top', duration: 1000 })}>Case Studies</a> directly.
            </h3>
          </div>
        </div>
      </section>
      <section id="what-we-do">
        <div className="subsection-left">
          <h1>What I do</h1>
          <div className="services bullet-list">
            <h3><FaRegCircle /> <b>Deliver measurable results</b> by showcasing working and improved product</h3>
            <h3><FaRegCircle /> Ensure <b>effective and transparent communication</b> that keeps everyone on the same page</h3>
            <h3><FaRegCircle /> Focus on <b>achieving your business goals</b> and bringing value</h3>
          </div>
          <div className="subsection-center top-spacing">
            <h2 className="subsection-text">
              I am an expert in <b className="accent">UI & UX development</b>, <b className="accent">performance optimization</b>, <b className="accent">frontend architecture and infrastructure</b>. 
            </h2>
            <h3 className="subsection-text">
              Besides my core skills, I can help you with backend API, product management and agile process optimization.
            </h3>
          </div>
          <div className="subsection-center top-spacing">
            <h3>Technologies I use: </h3>
            <h3 className="subsection-text" style={{ width: `100%`, fontWeight: `300` }}>
              <u><i>JavaScript, React, Redux, Mobx, Node, TypeScript, GraphQL, Webpack, Docker, Ruby on Rails & more</i></u>
            </h3>
          </div>
        </div>
      </section>
      <section id="how-we-do-it">
        <div className="subsection-center">
          <h1>Why me?</h1>
          <h3 style={{ width: `100%` }}>
            Most projects end up with similar problems. 
            Application <b>performance</b>, development <b>process</b>, product <b>delivery speed</b> and customer <b>happiness</b>. 
          </h3>
          <h3 style={{ width: `100%` }}>
            My technical solution always provides the best balance of those key ingredients and <b className="accent">maximizes your chance of success</b>.
          </h3>
          <div className="subsection-left top-spacing">
            <div className="why-us-questions">
              <h3><FaRegCircle />Need your C-Level technology lead?
              <br /><FaRegCircle />Need a technology review or overhaul?
              <br /><FaRegCircle />Need workflow and process optimization?
              <br /><FaRegCircle />Need a strategy to move forward?
              </h3>
              <h2>If you recognize yourself in some of these questions, <a href="#get-in-touch">get in touch</a>.</h2>
            </div>
          </div>
        </div>
      </section>
      <section id="my-work">
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
              <img alt="CK Case Study" src="https://images.squarespace-cdn.com/content/v1/5b5b57a1f8370a099b9bba36/1561385196174-KXQBGXEFO0NIGT9521QV/ke17ZwdGBToddI8pDm48kAccOGYkcTR9GniJVKNNku57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0oycmklwMHPwSb2Cr-KYzbrvqEPTnkt7KVjE1iP6-PxADtzJKPXOWLVqbUqkmJOxBA/Screen%2BShot%2B2019-06-24%2Bat%2B16.03.35.jpg?format=2500w" />
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
              <img alt="Movieo Case Study" src="https://images.squarespace-cdn.com/content/v1/5b5b57a1f8370a099b9bba36/1533443221183-C2SG5EAG4D9ZMZLPAVIE/ke17ZwdGBToddI8pDm48kDIqxffH9PldCQsyJA_eaPMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcsWhdrL4uT7Qobf16lxKkOKArIhW12yMy75CYh6XOkxLmIuhF1ggn2ppT7KI4buve/movieo-hero.jpg?format=1500w" />
            </div>
          </div>
          {!moreLoaded && (
            <div className="subsection-center">
              <div className="hero-button" onClick={() => setMoreLoaded(true)}>Load more</div>
            </div>
          )}
          { moreLoaded && (
            <div className="project backoffice">
              <div className="project-description">
                <h3>Solarisbank - Backoffice</h3>
                <p>
                solarisBank is a Berlin-based 250-person fintech company which took them less than three years to build the banking-as-a-platform, scale up a team, and raise almost €100m in funding rounds with Arvato, BBVA, Visa, Lakestar and other.
                </p>
                <Link to="/solarisbank-case-study">Case study</Link>
              </div>
              <div className="project-img-wrapper">
                <img alt="solarisBank - Case Study" src={solarisbankProjectImg} />
              </div>
            </div>
          )}
        </div>
      </section>
      <section id="testimonials">
        <div className="subsection-left">
          <h1>Testimonials</h1>
          <div className="testimonial">
            <h3>
              “I worked with Siniša in the beginning of my career and have followed his growth as a professional ever since. He’s a great, reliable developer who isn’t afraid to step out of his role when necessary. He pushed himself relentlessly to improve his skills on a daily basis.
            </h3>
            <h3>After a couple of successful projects he moved to Berlin and then finally to Bay Area.</h3>
            <h3>Siniša is down to earth hardworking professional and the person because of whom I started coding in the first place.</h3>
            <h3>Can’t recommend him enough!”</h3>
            <h5 className="hide-desktop">— IVOR REIC, OWNER AT CODETREE.CO</h5>
            <span className="author">
              <img src="https://media.licdn.com/dms/image/C5603AQGTGTjJWtJX1A/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=vtqi4XxUpm1SPTS5WZIk3gYk0WFKoZxqfKGGkCILnek" />
              <h5>— IVOR REIC, OWNER AT CODETREE.CO</h5>
            </span>
          </div>
        </div>
        <div className="subsection-right top-spacing">
          <div className="testimonial">
            <h3>
            “Sinisa possesses extensive and varied specialist knowledge, which he always deployed confidently and skillfully in practice. He demonstrated high personal initiative and identified fully with our company, impressing us in the process as well with his great enthusiasm.
            </h3>
            <h3>Even in situations where his workload was extreme, he demonstrated the greatest resilience and found exceptional solutions for any problems that arose.”</h3>
            <h5 className="hide-desktop">— INGMAR KRUSCH, VP ENGINEERING, SOLARISBANK</h5>
            <span className="author author-left">
              <img src="https://media.licdn.com/dms/image/C4D03AQGMSpvbNlYb4w/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=Y5d6ZPHORleUsYmpbHt0Hl15PCQtriHgIBggbqSuBLk" />
              <h5>— INGMAR KRUSCH, VP ENGINEERING, SOLARISBANK</h5>
            </span>
          </div>
        </div>
      </section>
      <section id="get-in-touch">
        <h1>Get in touch</h1>
        <h2>
          Tell me more about your project and send me an email at <a style={{ textDecoration: `none` }} href="mailto:sinisa@codewell.studio"><b className="accent">sinisa@codewell.studio</b></a></h2>
      </section>
    </Layout>
  )
}

export default IndexPage
