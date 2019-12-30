import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import SEO from '../components/seo';
import PostSnippet from '../components/PostSnippet';

function Index(props) {
    const siteTitle = props.data.site.siteMetadata.title;
    const posts = props.data.allMdx.edges;

    return (
      <Layout location={props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
				<div className="template index">
					<div className="inner">
						<div className="content">
							{posts.map(({ node }) => (
								<PostSnippet post={node} key={node.fields.slug} />
							))}
						</div>
					</div>
				</div>
      </Layout>
    )
}

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
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
