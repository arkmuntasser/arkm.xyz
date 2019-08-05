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
    const editUrl = `https://github.com/arkmuntasser/arkm/edit/master/content/blog${post.fields.slug.slice(0,-1)}.md`;
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
            <ul className="post-tags no-bullets">
              {tags.map((tag) => <li className="post-tag" key={tag}>{tag}</li>)}
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
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"><path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path></svg>
              </span>
              Share
            </a>
            <a className="twitter-link" href={discussUrl} target="_blank" rel="noopener noreferrer">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"><path d="M 7.0625 2 A 1.0001 1.0001 0 1 0 7.0625 4 L 22.9375 4 A 1.0001 1.0001 0 1 0 22.9375 2 L 7.0625 2 z M 5.0625 6 A 1.0001 1.0001 0 1 0 5.0625 8 L 24.9375 8 A 1.0001 1.0001 0 1 0 24.9375 6 L 5.0625 6 z M 4 10 C 2.895 10 2 10.895 2 12 L 2 24 C 2 25.105 2.895 26 4 26 L 12.390625 26 L 14.179688 28.570312 C 14.577688 29.142312 15.423312 29.142312 15.820312 28.570312 L 17.609375 26 L 26 26 C 27.105 26 28 25.105 28 24 L 28 12 C 28 10.895 27.105 10 26 10 L 4 10 z M 17.306641 13.123047 C 18.014641 13.123047 18.654516 13.423344 19.103516 13.902344 C 19.664516 13.791344 20.191969 13.587688 20.667969 13.304688 C 20.483969 13.879687 20.094937 14.361016 19.585938 14.666016 C 20.083938 14.607016 20.556047 14.475297 20.998047 14.279297 C 20.669047 14.772297 20.253484 15.204734 19.771484 15.552734 C 19.776484 15.658734 19.777344 15.765094 19.777344 15.871094 C 19.777344 19.125094 17.302438 22.876953 12.773438 22.876953 C 11.382437 22.876953 10.087047 22.468531 8.9980469 21.769531 C 9.1910469 21.792531 9.3888906 21.804688 9.5878906 21.804688 C 10.741891 21.804688 11.802531 21.411 12.644531 20.75 C 11.566531 20.73 10.65675 20.017063 10.34375 19.039062 C 10.49375 19.068062 10.648641 19.083984 10.806641 19.083984 C 11.031641 19.083984 11.249078 19.054047 11.455078 18.998047 C 10.329078 18.772047 9.4804687 17.776984 9.4804688 16.583984 L 9.4804688 16.552734 C 9.8124688 16.737734 10.191703 16.848328 10.595703 16.861328 C 9.9357031 16.420328 9.5019531 15.6665 9.5019531 14.8125 C 9.5019531 14.3605 9.6219844 13.937219 9.8339844 13.574219 C 11.047984 15.064219 12.863203 16.043484 14.908203 16.146484 C 14.866203 15.966484 14.845703 15.778937 14.845703 15.585938 C 14.845703 14.226938 15.946641 13.123047 17.306641 13.123047 z"></path></svg>
              </span>
              Discuss
            </a>
          </footer>
        </div>

        <Bio />

        <ul
          className="no-bullets"
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
