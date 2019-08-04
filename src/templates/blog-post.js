import React from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Bio from '../components/Bio'
import { Layout } from '../components/layouts/index'
import SEO from '../components/seo'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `https://arkm.xyz${post.fields.slug}`
    )}`;
    const editUrl = `https://github.com/arkmuntasser/arkm-gatsby/edit/master/content/blog${post.fields.slug}.md`;
    const shareUrl = `http://twitter.com/share?text=${encodeURIComponent(post.frontmatter.title)}&url=${encodeURIComponent(
      `https://arkm.xyz${post.fields.slug}`
    )}&via=arkmuntasser`;
    const tags = post.frontmatter.tags.split(', ').sort();

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div className="post">
          <header style={{
            marginBottom: `2rem`
          }}>
            <time className="date" datetime={post.frontmatter.datetime}>{post.frontmatter.date}</time>
            <h1 className="title">
              <span>
                {post.frontmatter.title}
              </span>
            </h1>
            <ul className="post-tags">
              {tags.map((tag) => <li className="post-tag">{tag}</li>)}
            </ul>
            <div className="extras">
              <span>{post.timeToRead} minute read</span>
              &nbsp;//&nbsp;
              <a href={shareUrl} target="_blank" rel="noopener noreferrer">
                Share
              </a>
              &nbsp;//&nbsp;
              <a href={editUrl} target="_blank" rel="noopener noreferrer">
                Edit this page
              </a>
            </div>
          </header>
          <div className="content">
            <MDXRenderer>{post.code.body}</MDXRenderer>
          </div>
          <footer>
            <a className="twitter-link" href={shareUrl} target="_blank" rel="noopener noreferrer">
              Share
            </a>
            <a className="twitter-link" href={discussUrl} target="_blank" rel="noopener noreferrer">
              Discuss
            </a>
          </footer>
        </div>
        <hr
          style={{
            marginBottom: `1rem`,
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      timeToRead
      excerpt(pruneLength: 160)
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        datetime: date(formatString: "YYYY-MM-DD")
      }
      code {
        body
      }
      fields {
        slug
      }
    }
  }
`
