import { graphql, useStaticQuery } from 'gatsby'

export const useSiteInfoQuery = () => {
  const { contentfulSiteInfo } = graphql`
    query HelmetQuery {
      contentfulWebsiteInfo {
        siteTitle
        siteDescription
        icon {
          favicon16: resize(width: 16) {
            src
          }
          favicon32: resize(width: 32) {
            src
          }
          bigIcon: resize(width: 192) {
            src
          }
          appleIcon: resize(width: 180) {
            src
          }
        }
      }
    }
  `

  return contentfulSiteInfo
}
