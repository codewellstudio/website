import React from "react"
import { Link } from "gatsby"
import { FaChevronRight, FaArrowLeft } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./case-study.css"

const SolarisBankCaseStudy = () => (
  <Layout>
    <SEO title="solarisBank Case Study" />
    <div className="case-study">
      <Link className="link-go-back" to="/"><FaArrowLeft /></Link>
      <h1 className="case-study--title">
        solarisBank Backoffice
        <a className="link-external-website" target="blank" href="https://www.solarisbank.com/">Visit website <FaChevronRight /></a>
      </h1>
      <p><b>solarisBank enables other businesses to offer fully digital and fully compliant financial services to their end-customer.</b> solarisBank is a pioneer in offering banking as a service, which meant they had tremendous challenges on technical side.</p>
      <h2>Marketplace team which was supposed to bring those products together and offer personalized shopping experience for our members. </h2>
      <p>
        Their vision was spanning into having the real-time interface providing our operations team transparency and supervision into our business. But soon after we saw the <b>opportunity to change the perception of banking software</b>.
        We were working directly under the CTO and quickly developed a roadmap which included a daunting task of externalizing our interface as a <b>white-label product!</b>
      </p>
      <p>We were spearheading the product development, hiring and onboarding more front end engineers to help out with the challenge at hand.</p>
      <p>Main obstacle was building features and keeping up with the heavily resourced backend teams while starting a brand new product and its technical architecture.</p>
      <img
        align="middle"
        style={{ width: '100%', display: 'inline-block' }}
        src="https://images.ctfassets.net/31h0albw7s12/79FTRFIZPyOooiyQ02UAIU/73e567b5e75859120a50bf00bd4364b1/17_039_SOLARIS__MaxThrelfallPhoto-3437.jpg?w=1020&h=536&fm=jpg&q=85&fit=thumb"
      />
      
      <p>To overcome these issues, our team had to become a <b>Swiss Army knife</b> of solarisBank. We developed our very own framework for adding entire CRUD endpoints in a matters of hours, fully tested and production ready, as opposed to couple of days. That framework also enabled new engineers to get up to speed in a matter of weeks, rather than months.</p>
      <ul>
        <li><b>Features that used to take up to three days to develop could now be done within three to four hours.</b></li>
        <li><b>New engineers that needed 6-8 weeks to get up to speed, now need less than 2 weeks.</b></li>
      </ul>
      <p>For a company that was growing rapidly, and strained with resources, our technical solution quickly turned into a very monetizable product. It proved that you don’t always need a lot of engineers, but a few well thought out ideas, and skills to implement them.</p>
      <h2>Since our tools was also used in promotional and demo purposes, <b>solarisBank's customer base have grown 10x and acquisition speed increased significantly!</b></h2>
      <p>When the project was finished, we had more than that to showcase. Overall team happiness was skyrocketing, development, performance and customer acquisition speed increased drastically. </p>
      <p>After one year, we checked back to see how the product is doing, and found out that the <b>code and architecture developed is being used as a core component in scaling new products,</b> and the <b>front end team is still the most efficient team!</b></p>
    </div>
  </Layout>
)

export default SolarisBankCaseStudy
