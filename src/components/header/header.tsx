import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./header.scss"

interface HeaderProps {
  siteTitle: string
}

interface HeaderLinks {
  label : string;
  href: string;
}

const headersData: HeaderLinks[] = [
  {
    label: "About Me",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Misc",
    href: "#misc",
  }
];

const Header = ({ siteTitle }: HeaderProps) => {

  const getMenu = () => {
    return headersData.map(({label, href}) => {
      return (
        <h2 className="header__menu__items">
          <Link to={`${href}`} className="header__menu__items--link">
            {label}
          </Link>
        </h2>
      )
    })
  }
  
  return (
    <header>
      <div className="header">
        <h1 className="header__title">
          <Link to="/" className="header__link">
            {siteTitle}
          </Link>
        </h1>
        <div className="header__menu">
          {getMenu()}
        </div>
      </div>
    </header>
  );
}

export default Header
