import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Journal = () => (
  <Layout>
    <SEO title="Journal" />
    <h1>Hi from journal</h1>
    <p>Welcome</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Journal
