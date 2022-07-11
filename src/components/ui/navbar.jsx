import React, { useState } from "react"
import { Link } from "gatsby"
import { Logo } from "../../utils/imgImport"
import { header_menus } from "../../utils/staticData"
import SearchField from "../search-field"

const Navbar = ({ type }) => {
  const [hambugerActive, setHambugerActiveState] = useState(false)

  const hamburgerHandler = () => {
    setHambugerActiveState(!hambugerActive)
  }

  let humbugerClsName = "hamburger my-auto "
  let navMenuClsName = "navbar-nav "

  if (hambugerActive) {
    humbugerClsName += "active"
    navMenuClsName += "active"
  }
  return (
    <header className={type}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="logo-container">
            <Link to="/">
              <img src={Logo} alt="logo" className="primary-logo" />
            </Link>
          </div>
          <div
            className={humbugerClsName}
            onClick={hamburgerHandler}
            onKeyDown={hamburgerHandler}
            role="button"
            tabIndex="0"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={navMenuClsName}>
            {header_menus.map((item, idx) => (
              <li className="nav-item" key={idx}>
                <Link
                  className="nav-link"
                  activeClassName="active"
                  to={item.to}
                >
                  <p className="sub-name">{item.kicker}</p>
                  <p className="link-name">{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>
          {type !== "third" && <SearchField />}
        </div>
      </nav>
    </header>
  )
}
export default Navbar
