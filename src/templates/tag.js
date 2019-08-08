import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../layouts/Layout'
import SEO from '../components/seo'
import PostSnippet from '../components/PostSnippet'

const TagTemplate = ({ data, location, pageContext }) => {
  const posts = data.allMdx.edges;
  const site = data.site;
  const { tag } = pageContext;

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <SEO title={`Posts tagged as "${tag}"`} />
      <h1>Posts tagged as <u>{tag}</u></h1>
      {posts.map(({ node }) => <PostSnippet post={node} key={node.fields.slug} />)}
      <Bio />
    </Layout>
  );
};

export default TagTemplate;

export const pageQuery = graphql`
  query($tag: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
