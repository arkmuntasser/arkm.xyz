import React from 'react';
import Frontmatter from './Frontmatter';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import '../styles/template.css';
import '../styles/page.css';

function Page({ page }) {
	const { frontmatter, code: { body } } = page;
	frontmatter.type = 'page';

	return (
		<main className="template page">
			<div className="inner">
				<Frontmatter frontmatter={frontmatter} />
				<div className="content">
					<MDXRenderer>{body}</MDXRenderer>
				</div>
			</div>
		</main>
	);
}

export default Page;
