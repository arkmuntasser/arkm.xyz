import React from 'react';
import Meta from './Meta';
import '../styles/frontmatter.css';

function Frontmatter({ frontmatter }) {
	const { title, image = null, ...meta } = frontmatter;
	meta.title = title;

	return (
		<header className="frontmatter">
			<h1 className="title">
				<span>{title}</span>
			</h1>
			{ meta.type !== 'page' && <Meta meta={meta} /> }
			{/* <PostImage /> */}
		</header>
	);
}

export default Frontmatter;
