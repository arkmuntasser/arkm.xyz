import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import SEO from '../components/seo';
import TagPage from '../components/TagPage';

function TagTemplate(props) {
	const posts = props.data.allMdx.edges;
	const siteTitle = props.data.site.siteMetadata.title;
	const tag = props.pageContext.tag;
	const page = {
		frontmatter: {
			title: `Posts tagged as "${tag}"`,
			type: 'page',
		},
		posts
	}

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title={page.frontmatter.title} />
			<TagPage page={page} />
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
