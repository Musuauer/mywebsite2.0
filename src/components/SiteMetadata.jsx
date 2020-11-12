import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { useSiteInfoQuery } from '../queries/useSiteInfoQuery'

const SiteMetadata = ( { title, description, image } ) => {
    const { siteTitle, siteDescription, icon } = useSiteInfoQuery()

    const {
        site: {
            siteMetadata: { locale },
        },
    } = useStaticQuery( graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          locale
        }
      }
    }
  ` )

    return (
        <Helmet
          defer={ false }
          defaultTitle={ siteTitle }
          title={ title }
          // titleTemplate={ siteTitle }
          titleTemplate={ `%s | ${ siteTitle }` }

        >
            <html lang={ locale } />
            <meta name='og:locale' content='en_US' />
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width,initial-scale=1' />
            <meta name='description' content={ siteDescription } />
            <meta property='og:type' content='website' />
            <meta property='og:title' content={ title } />
            <meta name='og:site_name' content={ siteTitle } />
            <meta property='og:locale' content={ locale } />
            <meta property='og:site_name' content={ siteTitle } />
            <meta name='og:image' content={ `https:${ icon.bigIcon.src }` } />
            <meta itemProp='image' content={ `https:${ icon.favicon32.src }` } />
            {/* <meta property='og:image' content={ icon.bigIcon.src } /> */}
            <meta name='image' content={ `https:${ icon.favicon32.src }` } />
            <meta property='og:description' content={ siteDescription } />
            <meta name='twitter:card' content={ siteDescription } />
            <meta name='twitter:image' content={ icon.bigIcon.src } />
            <meta name='twitter:image:src' content={ `https:${ icon.bigIcon.src }` } />
            <meta name='twitter:title' content={ siteTitle } />

            <link rel='shortcut icon' href={ `https:${ icon.favicon32.src }` } />
            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href={ `https:${ icon.appleIcon.src }` }
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href={ `https:${ icon.favicon32.src }` }
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href={ `https:${ icon.favicon16.src }` }
            />
        </Helmet>
    )
}

export default SiteMetadata
