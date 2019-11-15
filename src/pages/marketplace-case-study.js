import React from "react"
import { Link } from "gatsby"
import { FaChevronRight, FaArrowLeft } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./case-study.css"

const CreditKarmaCaseStudy = () => (
  <Layout>
    <SEO title="Marketplace Case Study" />
    <div className="case-study">
      <Link className="link-go-back" to="/"><FaArrowLeft /></Link>
      <h1 className="case-study--title">
        Credit Karma Marketplace
        <a className="link-external-website" target="blank" href="https://www.creditkarma.com/">Visit website <FaChevronRight /></a>
      </h1>
      <p>Credit Karma is an American multinational <b>personal finance company with over 88 million members, with valuation over 4 billion</b>. It offers free credit score reports, credit cards, personal loans shopping, tax filing and other financial products.</p>
      <h2>Marketplace team which was supposed to bring those products together and offer personalized shopping experience for our members. </h2>
      <p><b>What was the problem we were trying to solve?</b></p>
      <p>Most Credit Karma members don’t think of it as a place to shop for financial products.  And today, we know most people looking for financial products begin their search on google. For the same reason you search for books on Amazon and flights on Kayak, Credit Karma can become the place to search for financial products to get personalized results. Given that Credit Karma provided the most approval certainty of any online platform, we had the opportunity to provide trusted marketplace for our members at a critical moment in their financial lives.</p>
      <p><b>How did we solve it?</b></p>
      <p>Hypotheses was:</p>
      <ul>
        <li>Search may be an effective way to direct members with higher “purchase” intent to products they’re looking for</li>
        <li>Search can be a mechanism to help members discover the broad range of products we offer</li>
        <li>Search can help convey that we offer personalized results, which is unique to Credit Karma</li>
      </ul>
      <p>But there were risks too:</p>
      <ul>
        <li>Members don’t think to search for financial products on Credit Karma and so they don’t use search functionality</li>
        <li>Members search for things but we can’t monetize it</li>
        <li>Search can help convey that we offer personalized results, which is unique to Credit Karma</li>
      </ul>
      <p style={{ width: '50%', padding: '0 5%', display: 'inline-block', textAlign: 'center' }}>
        By building a cross-vertical search experience, we increased the number of members in-market for a product. We had to run numerous product experiments, homepage placements etc.
      </p>
      <img
        align="middle"
        style={{ width: '50%', display: 'inline-block' }}
        src="https://images.squarespace-cdn.com/content/v1/5b5b57a1f8370a099b9bba36/1561386039702-ALLWPQBQW3QDA8HEG70W/ke17ZwdGBToddI8pDm48kIUjAMMHKfg61v0ypuYqCB5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwDvyONvR00ei0WKJJSDPomh1i4bqL9i9daWep_1Vrqe9LDYwooGyuNgRf5c7stUqs/Screen+Shot+2019-06-24+at+16.18.43.png?format=750w"
      />
      <h2>Marketplace ended up as a successful experiment where <b>all our engineering effort was done with quality and in time</b>, regardless of the team being quickly put together and due to difficult nature of the product!</h2>
    </div>
  </Layout>
)

export default CreditKarmaCaseStudy
