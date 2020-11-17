import { graphql } from 'gatsby'
import React from 'react'
import Cards from '../components/Cards'
import Layout from '../layouts/Layout'
import SiteMetadata from '../components/SiteMetadata'
import { useSiteInfoQuery } from '../queries/useSiteInfoQuery'
import { css, cx } from 'emotion'

const IndexPage = ( { data } ) => {
    const { siteDescription } = useSiteInfoQuery()

    const stylez = css`
        width: 80%;

    `

    return (
        <Layout>
            <SiteMetadata title='Projects' description={ siteDescription } />

            <div
              className={ cx( stylez, 'projectlist' ) }
            >
                {data.portfolio && data.portfolio.nodes.length > 0 ? (
                    <Cards items={ data.portfolio.nodes } />
                ) : (
                    <div className=''>No projects found.</div>
                )}
            </div>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    portfolio: allContentfulProject {
      nodes {
        ...ProjectCard
      }
    }
  }
`
