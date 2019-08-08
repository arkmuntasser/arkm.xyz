import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Bio from '../components/Bio'
import Layout from '../layouts/Layout'
import SEO from '../components/seo'

const PageTemplate = ({ data, location }) => {
  const { mdx: page, site } = data;

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <SEO title={page.frontmatter.title} description={page.excerpt} />
      <div className="page">
        <div className="content">
          <MDXRenderer>{page.code.body}</MDXRenderer>
        </div>
      </div>
      <Bio />
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
      }
      code {
        body
      }
      fields {
        slug
      }
    }
  }
`
