const path = require(`path`)

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type contentfulProjectDescriptionTextNode implements Node {
//       description: String
//     }
//     type ContentfulProject implements Node {
//       id: ID!
//       title: String!
//       order: String!
//       label: String!
//       description: contentfulProjectDescriptionTextNode
//       thumbnail: [ContentfulAsset]
//       images: [ContentfulAsset]
//       relatedProjects: [ContentfulProject]
//       slug: String!
//     }
//   `
//   createTypes(typeDefs)
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        project: allContentfulProject {
          nodes {
            slug
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) {
        reject(errors)
      }

      if (data && data.project) {
        const component = path.resolve("./src/templates/project-item.tsx")
        data.project.nodes.map(({ slug }) => {
          createPage({
            path: `/${slug}`,
            component,
            context: { slug },
          })
        })
      }

      resolve()
    })
  })
}
