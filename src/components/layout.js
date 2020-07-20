import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import "../static/fonts/fonts.css"


const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle={"APRIL YANLI WANG"}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
        className="container" id="content"
      >
        <main>{children}</main>
        <footer>
          © April Wang {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
