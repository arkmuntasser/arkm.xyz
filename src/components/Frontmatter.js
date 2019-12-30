import React from 'react';
import Meta from './Meta';

function Frontmatter({ frontmatter }) {
	const { title, image = null, ...meta } = frontmatter;
	meta.title = title;

	return (
		<header className="frontmatter">
			<h1 className="title">
				<span>{title}</span>
			</h1>
			<Meta meta={meta} />
			{/* <PostImage /> */}
		</header>
	);
}

export default Frontmatter;
