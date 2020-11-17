import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../layouts/Layout'
import SiteMetadata from '../components/SiteMetadata'
import { useSiteInfoQuery } from '../queries/useSiteInfoQuery'

const AboutPage = ( { data } ) => {
    const { siteDescription } = useSiteInfoQuery()

    return (
        <Layout>
            <SiteMetadata title='About' description={ siteDescription } />

            <div className='about_wrapper'>
                <div className='right_container'>

                    { data.contentfulAbout.bio.bio }

                </div>
            </div>
        </Layout>
    )
}

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
