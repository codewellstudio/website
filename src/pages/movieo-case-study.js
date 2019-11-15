import React from "react"
import { Link } from "gatsby"
import { FaChevronRight, FaArrowLeft } from 'react-icons/fa'

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./case-study.css"

const MovieoCaseStudy = () => (
  <Layout>
    <SEO title="Movieo Case Study" />
    <div className="case-study">
      <Link className="link-go-back" to="/"><FaArrowLeft /></Link>
      <h1 className="case-study--title">
        Movieo
        <a className="link-external-website" target="blank" href="https://movieo.me/">Visit website <FaChevronRight /></a>
      </h1>
      <h2>In the beginning this was a pure passion project.</h2>
      <p>We skipped market research and jumped straight into design. <b>We started by brainstorming and sketching out different user interfaces</b>, then spent some time refining what we thought was the best one. We wanted to have a smart and simple-to-use filtering system that encouraged exploration, with movie scores from both IMDb and Rotten Tomatoes.</p>
      <p>The next step was building the actual web app. Responsibilities were split, which translated into Ivor and I working on the client-side and product roadmap, while Vedran dealt with the back-end part of the application. <b>Smooth and performant user experience was our top priority</b>, so we needed all movie data to be readily available in our own database. We decided to write a script that imported quarter of a million movies from <a target="blank" href="https://www.themoviedb.org/?language=en">TMDB</a> and <a target="blank" href="https://www.omdbapi.com/">OMDB</a> API’s, and automatically updated them on a daily basis.</p>
      <p>After a few months of working in our spare time, we were ready to release the first version. We showed it to friends and a couple of other people. Initial reactions were extremely positive. Since the point of this project wasn’t to make money, <b>we went with zero budget marketing</b>. We decided to submit Movieo to three popular sites who’s users would appreciate this kind of product: <b>Reddit, Hacker News, and Product Hunt.</b></p>
      <p>We beefed up our server stack expecting a high amount of traffic, created the submissions, and went out for a beer.</p>
      <p>We checked our real-time analytics after ordering drinks.</p>
      <p><b>500 visits.</b></p>
      <p>Upvotes on all three sites started mounting. We kept checking analytics.</p>
      <p><b>1,000 visits…2,000…10,000.</b></p>
      <p>Comments started pouring in:</p>
      <img src="https://images.squarespace-cdn.com/content/v1/5b5b57a1f8370a099b9bba36/1533517114668-1U3HPAMMZQYIIDBSYMSA/ke17ZwdGBToddI8pDm48kO6jSzBGJgGj__79hOOXpABZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIFjr8pZbWtcDItkt4Fhx8cbmcSrqazY3_B77Ilm-MHiU/reddit-movieo.png?format=1000w" />
      <p><b>By the end of the month almost half a million people tried our product</b>. We rose to front pages of <a target="blank" href="https://www.producthunt.com/posts/movieo">Product Hunt</a>, <a target="blank" href="https://news.ycombinator.com/item?id=8547351">Hacker News</a> and <a target="blank" href="https://www.fastcodesign.com/3038294/can-a-new-web-app-help-solve-the-what-movie-should-we-watch-conundrum">Fast Company</a>, staying there for over a day. We received hundreds of emails and witnessed thousands of people tweeting about Movieo.</p>
      <p><b>At the early product stages, it is not as much about traffic as it is about getting valuable feedback from your target audience</b>. And that’s exactly what we received. Overnight, our inbox turned into a goldmine of amazing ideas and suggestions. It’s unbelievable how many people are eager to help and express their support for products that actually solve their problems.</p>
      <p>After our initial success, we spent the next year working on design, features and onboarding in our spare time.</p>
      <p>Here is the difference between the initial and the current version:</p>
      <img style={{ width: '50%' }} src="https://images.squarespace-cdn.com/content/v1/5b5b57a1f8370a099b9bba36/1533517445946-UZ1CG3VH0X2V5AVMTWD4/ke17ZwdGBToddI8pDm48kJvX6Ce1WJe9N7NoB6qyRLZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIz615k9Q-H4uBXSKj4LYLTnk66cYZsmgY-1L6IoSdyCUKMshLAGzx4R3EDFOm1kBS/movieo-old.jpg?format=750w" />
      <img style={{ width: '50%' }} src="https://images.squarespace-cdn.com/content/v1/5b5b57a1f8370a099b9bba36/1533517472494-OF34GZB30ND7G0Y4DAZB/ke17ZwdGBToddI8pDm48kDIqxffH9PldCQsyJA_eaPMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcsWhdrL4uT7Qobf16lxKkOKArIhW12yMy75CYh6XOkxLmIuhF1ggn2ppT7KI4buve/movieo-new.jpg?format=750w" />
      <p>We used Movieo as a platform for experimenting with different technologies, analytics setups, onboarding and conversion tactics, and more. Movieo gave us the opportunity to talk with other businesses and marketing agencies and learn about product monetization. Needing to wear many hats such as developing the product, creating social media campaigns and improving user retention provided valuable insight while working alongside friends made the experience simply amazing. </p>
      <p>We stopped working on it after a while, but the servers are still running and we still have many returning users. The automated scripts keep movies up to date.</p>
      <p>Today, in 2019, <b>Movieo is used by more than 100,000 people every month</b>. Even though we haven’t promoted it in over two years now, the numbers are still slowly but steadily rising.</p>
    </div>
 </Layout>
)

export default MovieoCaseStudy
