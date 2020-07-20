import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Experience = () => (
  <Layout>
    <SEO title="experience" />
    <h1>I'm totally experienced and qualified</h1>
    <p>for whatever it is you might ask me to do. But in case you're not convinced ... </p>
    <p>check out my <Link to="https://docs.google.com/document/d/1Ei_OQ7GXPY7rsR2vXiZJDSoldjxJK844kDIXXETrGUw/edit?usp=sharing">
         resume
      </Link>
    </p>

  </Layout>
)

export default Experience
