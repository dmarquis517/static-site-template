import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className='medium-container'>
      <div className='flex-row'>
        <div className='flex-large'>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div className="flex-large nav-container">
        <Link
              to="/page-2"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
              className='nav-link'
            >
            Page 2
        </Link>
        <Link
              to="/page-2"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
              className='nav-link'
            >
            Page 3
        </Link>
        </div>
      </div>
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
