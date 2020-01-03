import React from 'react';
import Frontmatter from './Frontmatter';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Pager from './Pager';
import '../styles/template.css';
import '../styles/blog-post.css';

function BlogPost({ post, pageContext }) {
	const { frontmatter, timeToRead, code: { body } } = post;
	frontmatter.timeToRead = timeToRead;
	frontmatter.slug = post.fields.slug;

	return (
		<main className="template blog-post">
			<div className="inner">
				<Frontmatter frontmatter={frontmatter} />
				<div className="content">
					<MDXRenderer>{body}</MDXRenderer>
				</div>
				<Pager context={pageContext} />
			</div>
		</main>
	);
}

export default BlogPost;
