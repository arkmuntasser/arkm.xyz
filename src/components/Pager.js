import React from 'react';
import { Link } from 'gatsby';

function Pager({ context }) {
	const { previous, next } = context;

	return (
		<div className="pager">
				{previous && (
					<div className="prev">
						<Link to={previous.fields.slug} rel="prev">
							← {previous.frontmatter.title}
						</Link>
					</div>
				)}
				{next && (
					<div className="next">
						<Link to={next.fields.slug} rel="next">
							{next.frontmatter.title} →
						</Link>
					</div>
				)}
		</div>
	);
}

export default Pager;
