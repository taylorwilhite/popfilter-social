import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Social from "../components/social"
import SocialLinks from "../data/social"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="main-content">
      <div style={{ maxWidth: `300px`, margin: `20px auto` }}>
        <Image />
      </div>
      <a href="https://www.yourpopfilter.com" target="blank"><h1 className="pagetitle">YOURPOPFILTER</h1></a>
      <div className="links-main">
        {SocialLinks.map(link => 
          <Social network={link} />  
        )}
      </div>
    </div>

  </Layout>
)

export default IndexPage
