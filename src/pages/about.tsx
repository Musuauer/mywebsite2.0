import { graphql } from "gatsby"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

  <div>
    { data.contentfulAbout.bio.bio }
  </div>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    contentfulAbout {
      bio {
        bio
      }
    }
  }

`
