import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Social from "../components/social"
import SocialLinks from "../data/social"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="main-content">
      <h1 className="pagetitle">Yourpopfilter links</h1>
      <div style={{ maxWidth: `300px`, margin: `auto` }}>
        <Image />
      </div>
      <div className="links-main">
        {SocialLinks.map(link => 
          <Social network={link} />  
        )}
      </div>
    </div>

  </Layout>
)

export default IndexPage
