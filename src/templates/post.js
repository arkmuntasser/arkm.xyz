import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import SEO from '../components/seo';
import BlogPost from '../components/BlogPost';

function BlogPostTemplate(props) {
	const post = props.data.mdx;
	const siteTitle = props.data.site.siteMetadata.title;
	const pageContext = props.pageContext;

	return (
		<Layout location={props.location} title={siteTitle}>
			<SEO title={post.frontmatter.title} description={post.excerpt} />
			<BlogPost post={post} pageContext={pageContext}/>
		</Layout>
	)
}

export default BlogPostTemplate;

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
      timeToRead
      excerpt(pruneLength: 160)
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        datetime: date(formatString: "YYYY-MM-DD")
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
