import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import scrollToElement from "scroll-to-element"
import { FaBars } from 'react-icons/fa'

import "./header.css"
import logoImg from "../images/logo.png"

const NavigationLinks = ({ handleAnchorLink }) => (
  <React.Fragment>
    <span
      className="header-link"
      onClick={() => handleAnchorLink('#about-me')}
    >
      About me
    </span>
    <span
      className="header-link"
      onClick={() => handleAnchorLink('#what-we-do')}
    >
      What I do
    </span>
    <span
      className="header-link"
      onClick={() => handleAnchorLink('#how-we-do-it')}
    >
      Why me?
    </span>
    <span
      className="header-link"
      onClick={() => handleAnchorLink('#my-work')}
    >
      My work
    </span>
    <span
      className="header-link"
      onClick={() => handleAnchorLink('#testimonials')}
    >
      Testimonials
    </span>
    <span
      className="header-link last"
      onClick={() => handleAnchorLink('#get-in-touch')}
    >
      Get in touch
    </span>
  </React.Fragment>
)

const Header = ({ siteTitle }) => {
  const [mobileMenuOn, toggleMobileMenu] = useState(false);
  const [navigationOn, toggleNavigation] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      toggleNavigation(false)
    }
  }, []);

  const toggleMenu = () => {
    toggleMobileMenu(!mobileMenuOn)
  }

  const handleAnchorLink = (hash) => {
    scrollToElement(hash, {
      align: 'top',
      duration: 1000,
    })

    if (mobileMenuOn) {
      toggleMobileMenu(!mobileMenuOn)
    }
  }

  return (
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
        fontFamily: `'Poppins', sans-serif`,
        boxShadow: `0 -4px 7px #000`,
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <Link
          // onClick={() => handleAnchorLink('/#welcome')}
          // onClick={() => window.location.replace('/')}
          to="/"
          style={{ display: `block`, maxWidth: `214px`, cursor: `pointer`, marginLeft: `0.75rem` }}
        >
          <img
            src={logoImg}
            alt="Code Well Studio - Logo"
            style={{ marginBottom: `-7px` }}
          />
        </Link>
      </div>
      {navigationOn && (
        <React.Fragment>
          <div className="header-link-wrapper">
          <NavigationLinks handleAnchorLink={handleAnchorLink} />
          </div>
          <FaBars
            className="header-link-wrapper-mobile-toggle"
            onClick={() => toggleMenu()}
          />
          {mobileMenuOn && (
            <div className="header-link-wrapper-mobile">
              <NavigationLinks handleAnchorLink={handleAnchorLink} />
            </div>
          )}
        </React.Fragment>
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
