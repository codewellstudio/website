import React from "react"
import scrollToElement from "scroll-to-element"
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

import "./arrow-icon.css"

const handleAnchorLink = (hash) => {
  scrollToElement(hash, {
    align: 'top',
    duration: 1000,
  })
}

const ArrowIcon = ({ linkPath, isUp }) => (
  <div
    onClick={() => handleAnchorLink(linkPath)}
    className="arrow-icon"
  >
    {isUp && <FaChevronUp />}
    {!isUp && <FaChevronDown />}
  </div>
)

export default ArrowIcon
