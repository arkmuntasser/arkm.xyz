import React from 'react';
import { Link } from 'gatsby'

const PostSnippet = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug

  return (
    <div className="post-snippet">
      <small className="date">{post.frontmatter.date}</small>
      <h3 className="title">
        <Link to={`/posts${post.fields.slug}`}>
          {title}
        </Link>
      </h3>
      <p className="content" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    </div>
  );
}

export default PostSnippet;
