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
      `https://arkm.xyz${post.frontmatter.path}`
    )}`;
    const editUrl = `https://github.com/arkmuntasser/arkm-gatsby/edit/master/content/blog${post.frontmatter.path}.md`;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div className="post">
          <p className="date">
            {post.frontmatter.date}
          </p>
          <h1 className="title">
            <span>
              {post.frontmatter.title}
            </span>
          </h1>
          <div className="content">
            <MDXRenderer>{post.code.body}</MDXRenderer>
          </div>
          <footer>
            <a href={discussUrl} target="_blank" rel="noopener noreferrer">
              Discuss on Twitter
            </a>

            <a href={editUrl} target="_blank" rel="noopener noreferrer">
              Edit this page
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
      excerpt(pruneLength: 160)
      frontmatter {
        title
        path
        date(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`
