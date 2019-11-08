import React, { useState } from "react"
import scrollToElement from "scroll-to-element"
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

import "./arrow-icon-fixed.css"

const ArrowIconFixed = ({ anchors }) => {
  const [lastSection, onLastSectionMark] = useState(false);
  const windowInnerHeight = window.innerHeight;
  const lastSectionAnchor = (anchors.length - 2) * windowInnerHeight;

  const onScrollDown = ({ anchors }) => {
    const windowInnerHeight = window.innerHeight;
    const windowScrollY = window.scrollY;

    if (windowScrollY > lastSectionAnchor) {
      onLastSectionMark(true)
    }
    
    for (let i = 0; i < anchors.length; i++) {
      let first = windowInnerHeight * i; // first screen size
      let second = windowInnerHeight * (i + 1); // second screen size is 2x and so on
      
      if (windowScrollY >= first && windowScrollY < second) {
        scrollToElement(anchors[i+1], {
          offset: 10,
          align: 'top',
          duration: 1000,
        })
      }
    }
  }

  const onScrollUp = () => {
    onLastSectionMark(false)

    scrollToElement(anchors[0], {
      align: 'top',
      duration: 1000,
    })
  }

  return (
    <React.Fragment>
    {!lastSection && (
      <div
        onClick={() => onScrollDown({ anchors })} 
        className="arrow-icon-fixed"
      >
        <FaChevronDown />
      </div>
    )}
    {lastSection && (
      <div
        onClick={() => onScrollUp()} 
        className="arrow-icon-fixed"
      >
        <FaChevronUp />
      </div>
    )}
    </React.Fragment>
  )
}

export default ArrowIconFixed
