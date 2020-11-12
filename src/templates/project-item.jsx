import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import SiteMetadata from '../components/SiteMetadata'
import Button from '../components/Button'
import Cards from '../components/Cards'
import Carousel from '../components/Carousel'
import Layout from '../layouts/Layout'

export default ( props ) => {
    const {
        description,
        images,
        title,
        relatedProjects,
        thumbnail,
        slug,
    } = props.data.item

    return (
        <Layout>
            <SiteMetadata
              title={ title }
              description={ description }
              image={ thumbnail.publicURL }
            />
            <div className=''>
                <div className=''>
                    <div className=''>
                        <div className=''>
                            {images && images.length === 1 && (
                            <Img
                              fluid={ images[ 0 ].fluid }
                              alt={ title }
                            />
                            )}
                            {images && images.length > 1 && <Carousel images={ images } />}
                        </div>
                        <div className=''>
                            <h1 className=''>
                                {title}
                            </h1>
                            {description && (
                            <div className=''>
                                {description.description}
                            </div>
                            )}
                            {slug && (
                            <div className=''>
                                <Button href={ slug }>More info</Button>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {relatedProjects && (
            <div className=''>
                <div className=''>
                    <h2 className=''>
              You may also like
                    </h2>
                </div>
                <Cards items={ relatedProjects } hideLastItemOnMobile />
            </div>
            )}

        </Layout>
    )
}

export const query = graphql`
  query ProjectItemQUery($slug: String!) {
    item: contentfulProject(slug: { eq: $slug }) {
      description {
        description
      }
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      title
      relatedProjects {
        ...ProjectCard
      }
      thumbnail {
        localFile {
          publicURL
        }
      }
      slug
    }
  }
`
