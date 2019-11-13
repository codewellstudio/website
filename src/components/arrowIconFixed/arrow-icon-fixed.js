import React, { useState } from "react"
import scrollToElement from "scroll-to-element"
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

import "./arrow-icon-fixed.css"

const ArrowIconFixed = ({ anchors }) => {
  const [lastSection, onLastSectionMark] = useState(false);
  const windowInnerHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const lastSectionAnchor = (anchors.length - 2) * windowInnerHeight;

  const onScrollDown = ({ anchors }) => {
    const windowInnerHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
    const windowScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

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
      <div className="arrow-icon-fixed">
        <FaChevronDown onClick={() => onScrollDown({ anchors })}  />
      </div>
    )}
    {lastSection && (
      <div className="arrow-icon-fixed">
        <FaChevronUp onClick={() => onScrollUp()}  />
      </div>
    )}
    </React.Fragment>
  )
}

export default ArrowIconFixed
