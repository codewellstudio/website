import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import scrollToElement from "scroll-to-element"

import Logo from "./logo"

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
      width: `100%`,
      height: `60px`,
      background: `white`,
      fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
      boxShadow: `0 -4px 6px #000`,
    }}
  >
    {/* <div style={{ maxWidth: `200px` }}>
      <Logo />
    </div> */}
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
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
        onClick={() => handleAnchorLink('#what-we-do')}
        style={{
          textDecoration: `none`,
          cursor: `pointer`,
        }}
      >
        What we do
      </span>
      <span
        onClick={() => handleAnchorLink('#how-we-do-it')}
        style={{
          textDecoration: `none`,
          cursor: `pointer`,
        }}
      >
        How we do it
      </span>
      <span
        onClick={() => handleAnchorLink('#section3')}
        style={{
          textDecoration: `none`,
          cursor: `pointer`,
        }}
      >
        Section 3
      </span>
      <span
        onClick={() => handleAnchorLink('#section4')}
        style={{
          textDecoration: `none`,
          cursor: `pointer`,
        }}
      >
        Section 4
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
