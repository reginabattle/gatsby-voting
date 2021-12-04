const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allWpPage(filter: { slug: { nin: ["home"] } }) {
        nodes {
          id
          slug
        }
      }

      allWpTopic {
        nodes {
          id
          slug
        }
      }

      allWpGuide {
        nodes {
          id
          slug
        }
      }
    }
  `)
}
