import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import SEO from '../components/seo';
import Frontmatter from '../components/Frontmatter';
import '../styles/template.css';

function NotFoundPage(props) {
	const siteTitle = props.data.site.siteMetadata.title;
	const frontmatter = {
		title: 'Not Found',
		type: 'page',
	}

	return (
		<Layout location={props.location} title={siteTitle}>
			<SEO title="404: Not Found" />
			<div className="template 404">
				<div className="inner">
					<Frontmatter frontmatter={frontmatter} />
					<div className="content">
						<p>
							You just hit a route that doesn&#39;t exist... the sadness.
						</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
