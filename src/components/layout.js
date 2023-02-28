/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";

import Header from "./header";
import ProjectTimeline from "./timeline";
import logo from "../images/logo.png";
import "./layout.css";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <ProjectTimeline />
      <div
        className={container}
        style={{
          display: `inline-block`,
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
            <li className={navLinkItem}><Link to="/projects" className={navLinkText}>Projects</Link></li>
            <li className={navLinkItem}><Link to="/resume" className={navLinkText}>Resume</Link></li>
          </ul>
        </nav>
        
        <main
          style={{
            display: `inline-block`
          }}
        >
          <h1 className={heading}>{pageTitle}</h1>
          
          {children}
        </main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
