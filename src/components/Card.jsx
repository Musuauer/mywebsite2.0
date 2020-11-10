import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Card = props => {
  const { title, slug, description, thumbnail } = props

  return (
    <div className="bg-white h-full shadow-sm rounded-md overflow-hidden group">
      <Link to={`/${slug}`}>
        <div className="group-hover:opacity-75 transition duration-150 ease-in-out">
          <Img fluid={thumbnail.fluid} alt={title} />
        </div>
        <div className="p-4 sm:p-5">
          <h1 className="sm:text-lg text-gray-900 font-semibold">{title}</h1>
          <p className="text-sm sm:text-base text-gray-700">{description.description}</p>
        </div>
      </Link>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Card

export const query = graphql`
  fragment ProjectCard on ContentfulProject {
    id
    title
    slug
    thumbnail {
      localFile {
        childImageSharp {
          fluid(maxWidth: 444, maxHeight: 342, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    description {
      description
    }
  }
`
