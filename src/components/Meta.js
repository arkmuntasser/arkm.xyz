import React from 'react';
import { Link } from 'gatsby';
import slugify from 'slugify';

function Tag({ tag }) {
	return (
		<li className="tag">
			<Link to={`/tags/${slugify(tag)}`}>
				{tag}
			</Link>
		</li>
	)
}

function Meta({ meta }) {
	const { tags, timeToRead, title, slug, datetime, date } = meta;
	const editUrlBase = 'https://github.com/arkmuntasser/arkm/edit/master/content/blog';
	const editUrl = `${editUrlBase}${slug.slice(0,-1)}.md`;
	const shareUrlBase = 'http://twitter.com/share?text=';
	const encodedTitle = encodeURIComponent(title);
	const encodedSlug = encodeURIComponent(`https://arkm.xyz${slug}`)
	const shareUrl = `${shareUrlBase}${encodedTitle}&url=${encodedSlug}&via=arkmuntasser`;

	return (
		<div className="metas">
			<div className="meta">
				<span className="meta-label">Date</span>
				<time className="meta-content date" dateTime={datetime}>{date}</time>
			</div>

			<div className="meta">
				<span className="meta-label">Tags</span>
				<ul className="meta-content tags">
					{tags.map((tag) => <Tag tag={tag} key={tag} />)}
				</ul>
			</div>

			<div className="extras">
				<span>{timeToRead} minute read</span>
				<a
					href={shareUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					Share
				</a>
				<a
					href={editUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					Edit this post
				</a>
			</div>
		</div>
	);
}

export default Meta;
