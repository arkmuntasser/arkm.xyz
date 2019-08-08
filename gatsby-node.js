const path = require(`path`)
const slugify = require('slugify')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`./src/templates/post.js`)
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const tagTemplate = path.resolve(`./src/templates/tag.js`)
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                template
                tags
              }
              code {
                scope
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const allMarkdownFiles = result.data.allMdx.edges;
    const posts = allMarkdownFiles.filter(file => file.node.frontmatter.template === 'post');
    const pages = allMarkdownFiles.filter(file => file.node.frontmatter.template === 'page');
    const tags = new Set();

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      if (post.node.frontmatter.tags) {
        post.node.frontmatter.tags.forEach(tag => {
          tags.add(tag)
        })
      }

      createPage({
        path: post.node.fields.slug,
        component: postTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    pages.forEach((page) => {
      createPage({
        path: page.node.fields.slug,
        component: pageTemplate,
        context: {
          slug: page.node.fields.slug,
        },
      })
    })

    tags.forEach((tag) => {
      createPage({
        path: `/tags/${slugify(tag)}`,
        component: tagTemplate,
        context: {
          tag,
        }
      })
    })

  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
