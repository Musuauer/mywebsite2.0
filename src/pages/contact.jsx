import { graphql } from 'gatsby'
import React from 'react'
import { css, cx } from 'emotion'
import { useTheme } from '@emotion/react'
import Layout from '../layouts/Layout'
import SiteMetadata from '../components/SiteMetadata'
import { useSiteInfoQuery } from '../queries/useSiteInfoQuery'
import { FaInstagram, FaEnvelope } from 'react-icons/fa'

const ContactPage = ( { data } ) => {
    const { siteDescription } = useSiteInfoQuery()
    const theme = useTheme()

    const { email, instagram } = data.contentfulContact

    const stylez = css`
      a {
          display: block;
        }
   `

    return (
        <Layout>
            <SiteMetadata title='Contact' description={ siteDescription } />

            <div className={ cx( stylez, 'contact_wrapper' ) }>
                <div className='right_container'>

                    <div className='email_wrapper'>
                        <a
                          href={ `mailto:${ email }` }
                          className='email'
                        >
                            { email }
                        </a>
                    e-mail
                    </div>

                    <div className='instagram_wrapper'>
                        <a
                          href={ instagram }
                          target='_blank'
                          rel='noreferrer noopener'
                          className='instagram'
                        >
                         guillermo_gudino
                        </a>
                    instagram
                    </div>

                </div>

            </div>

        </Layout>
    )
}

export default ContactPage

export const query = graphql`
  query {
    contentfulContact {
      email
      instagram
    }
  }

`
