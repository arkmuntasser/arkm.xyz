import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import SEO from '../components/seo';
import Page from '../components/Page';

function PageTemplate(props) {
	const page = props.data.mdx;
	const siteTitle = props.data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title={page.frontmatter.title} description={page.excerpt} />
			<Page page={page} />
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
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
