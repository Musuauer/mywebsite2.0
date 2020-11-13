import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { css, cx } from 'emotion'

const Card = ( props ) => {
    const { title, slug, description, thumbnail } = props

    const stylez = css`
        font-weight: 400;
    `

    return (
        <div className={ cx( stylez ) }>
            <Link to={ `/${ slug }` }>
                <div className=''>
                    <Img fluid={ thumbnail.localFile.childImageSharp.fluid } alt={ title } />
                </div>
                <div className=''>
                    <h1 className=''>{title}</h1>
                    <p className=''>{description.description}</p>
                </div>
            </Link>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    description: PropTypes.shape( {
        description: PropTypes.string,
    } ),
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
