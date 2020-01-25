import React from 'react';
import { Link } from 'gatsby';
import '../styles/post-snippet.css';

function PostSnippet({ post }) {
	const { title, datetime, date } = post.frontmatter;

  return (
    <article className="post-snippet">
			<time className="meta-content date" dateTime={datetime}>{date}</time>
      <h3 className="title">
        <Link to={post.fields.slug}>
          {title}
        </Link>
      </h3>
      <p className="excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    </article>
  );
}

export default PostSnippet;
