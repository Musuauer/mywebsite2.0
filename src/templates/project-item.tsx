import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Button from "../components/Button"
import Cards from "../components/Cards"
import Carousel from "../components/Carousel"
import Layout from "../layouts/Layout"

export default props => {
  const {
    description,
    images,
    title,
    relatedProjects,
    thumbnail,
    url,
  } = props.data.item

  return (
    <Layout>
      <SiteMetadata
        title={title}
        description={description}
        image={thumbnail.publicURL}
      />
      <div className="bg-gray-0 py-12 lg:py-16">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/3 pb-8">
              {images && images.length === 1 && (
                <Img
                  fluid={images[0].fluid}
                  alt={title}
                />
              )}
              {images && images.length > 1 && <Carousel images={images} />}
            </div>
            <div className="w-full lg:w-1/3 lg:pl-8 xl:pl-12">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-1">
                {title}
              </h1>
              {description && (
                <div className="my-4 text-base text-gray-700 whitespace-pre-line">
                  {description.description}
                </div>
              )}
              {url && (
                <div className="mt-8">
                  <Button href={url}>More info</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {relatedProjects && (
        <div className="bg-gray-100 py-12 lg:py-16">
          <div className="container">
            <h2 className="text-3xl sm:text-4xl leading-tight font-extrabold tracking-tight text-gray-900 mb-8">
              You may also like
            </h2>
          </div>
          <Cards items={relatedProjects} hideLastItemOnMobile={true} />
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
            fluid(maxWidth: 960, quality: 85) {
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
