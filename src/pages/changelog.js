import React from 'react'
import { Link, graphql } from 'gatsby'

import { Layout } from '../components/layouts/index'
import SEO from '../components/seo'

const Changelog = ({ location, data}) => {
  const siteTitle = data.site.siteMetadata.title
  const log = [
    {
      date: 'August 03, 2019',
      changes: [
        'Launched!'
      ]
    }
  ];

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Changelog" />
      <h1>Changelog</h1>
      <ul className="changelog no-bullets">
        {log.map(({ date, changes }) => (
          <li key={date}>
            <time className="date" dateTime={date}>{date}</time>
            <ul>
              {changes.map((change, i) => <li key={i}>{change}</li>)}
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
