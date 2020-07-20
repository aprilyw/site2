import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Hi from the projects page</h1>
    <p>Welcome to projects</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Projects
