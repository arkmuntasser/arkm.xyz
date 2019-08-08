import React from 'react'
import { Link } from 'gatsby'
import '../styles/global.css'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            fontSize: `1.5rem`,
            marginBottom: `1.5rem`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: `800px`,
          padding: `3rem 2rem`,
        }}
      >
        {header}
        {children}
        <footer className="global-footer">
          <a className="footer-link" href="https://twitter.com/arkmuntasser" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a className="footer-link" href="https://github.com/arkmuntasser" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <Link className="footer-link" to="/rss.xml">
            RSS
          </Link>
          <Link className="footer-link" to="/changelog">
            Changelog
          </Link>
        </footer>
      </div>
    )
  }
}

export default Layout
