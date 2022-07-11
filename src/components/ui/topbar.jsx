import React from "react"
import { Link } from "gatsby"

import { top_menus } from "../../utils/staticData"

const Topbar = () => (
  <div className="topbar">
    <div className="container d-flex justify-content-end">
      {top_menus.map((item, idx) => (
        <a
          className="top-navlink"
          href={item.to}
          style={{ backgroundColor: `${item.color}` }}
          key={idx}
          target="_blank"
        >
          {item.name}
        </a>
      ))}
    </div>
  </div>
)

export const Topbar2 = () => {
  return (
    <div className="topbar2">
      <div className="container">
        <div className="d-flex justify-content-end">
          {top_menus.map((item, idx) => (
            <Link
              className="top-navlink"
              to={item.to}
              style={{ backgroundColor: `${item.color}` }}
              key={idx}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Topbar
