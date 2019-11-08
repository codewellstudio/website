// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import scrollToElement from "scroll-to-element"

import "./header.css"
// import Logo from "./logo"
import logoImg from "../images/logo.png"

const handleAnchorLink = (hash) => {
  scrollToElement(hash, {
    align: 'top',
    duration: 1000,
  })
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      zIndex: 1,
      position: `fixed`,
      top: `0`,
      display: `flex`,
      alignItems: `center`,
      width: `100%`,
      height: `60px`,
      background: `white`,
      fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
      boxShadow: `0 -4px 7px #000`,
    }}
  >
    <div style={{ flexGrow: 1 }}>
      <div
        // onClick={() => handleAnchorLink('/#welcome')}
        onClick={() => window.location.replace('/')}
        style={{ maxWidth: `200px`, cursor: `pointer` }}
      >
        {/* <Logo /> */}
        <img
          src={logoImg}
          alt="Code Well Studio - Logo"
          style={{ marginBottom: `-5px` }}
        />
      </div>
    </div>
    <div
      style={{
        // margin: `0 auto`,
        // maxWidth: 960,
        height: `60px`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        color: `rgb(18, 36, 49)`,
        fontSize: `0.85028rem`, // h5
        fontWeight: 200,
        // padding: `1rem`,
      }}
    >
      <span
        className="header-link"
        onClick={() => handleAnchorLink('#what-we-do')}
      >
        What we do
      </span>
      <span
        className="header-link"
        onClick={() => handleAnchorLink('#how-we-do-it')}
      >
        How we do it
      </span>
      <span
        className="header-link"
        onClick={() => handleAnchorLink('#our-work')}
      >
        Our work
      </span>
      <span
        className="header-link last"
        onClick={() => handleAnchorLink('#get-in-touch')}
      >
        Get in touch
      </span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
