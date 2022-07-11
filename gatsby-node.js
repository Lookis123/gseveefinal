const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryResults = await graphql(`
    {
      allPrismicResource {
        nodes {
          uid
          id
        }
      }
      allPrismicCategory {
        nodes {
          uid
          id
        }
      }
    }
  `)

  queryResults.data.allPrismicResource.nodes.forEach(node => {
    createPage({
      path: `/resource/${node.uid}`,
      component: path.resolve(`src/templates/resource.jsx`),
      context: {
        id: node.id,
      },
    })
  })
  queryResults.data.allPrismicCategory.nodes.forEach(node => {
    createPage({
      path: `/category/${node.uid}`,
      component: path.resolve(`src/templates/category.jsx`),
      context: {
        id: node.id,
      },
    })
  })
}
