import React from 'react'
import { Link, graphql } from 'gatsby'

import { Layout } from '../components/layouts/index'
import SEO from '../components/seo'

const Changelog = ({ location, data}) => {
  const siteTitle = data.site.siteMetadata.title
  const log = [
    {
      date: '2019-08-03',
      changes: [
        'launch!'
      ]
    }
  ];

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Changelog" />
      <h1>Changelog</h1>
      <ul>
        {log.map(({ date, changes }) => (
          <li>
            <time className="date" datetime={date}>{date}</time>
            <ul>
              {changes.map((change) => <li>{change}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Changelog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
