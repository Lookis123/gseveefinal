import React, { useState, useRef, useEffect } from "react"
import "./sticky-wrapper.scss"

const StickyWrapper = props => {
  const { children } = props
  const [isSticky, setSticky] = useState(false)
  const ref = useRef(null)

  const handleScroll = () => {
    setSticky(
      document.getElementById("bounder")?.getBoundingClientRect().top <= 120
    )
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  })
  return (
    <>
      <div
        className={`sticky-wrapper${isSticky ? " sticky-wrapper--sticky" : ""}`}
        ref={ref}
      >
        {children}
      </div>
    </>
  )
}
export default StickyWrapper
