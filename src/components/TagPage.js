import React from 'react';
import Frontmatter from './Frontmatter';
import PostSnippet from './PostSnippet';
import '../styles/template.css';
import '../styles/tag-page.css';

function TagPage({ page }) {
	const { frontmatter, posts } = page;

	return (
		<main className="template tag-page">
			<div className="inner">
				<Frontmatter frontmatter={frontmatter} />
				<div className="content">
					{posts.map(({ node }) => (
						<PostSnippet post={node} key={node.fields.slug} />
					))}
				</div>
			</div>
		</main>
	);
}

export default TagPage;
