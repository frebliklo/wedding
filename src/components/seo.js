import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title, noIndex }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description

        const metaValues = noIndex
          ? [
            {
              name: 'robots',
              content: 'noindex',
            },
          ]
          : [
            {
              name: 'description',
              content: metaDescription,
            },
            {
              property: 'og:title',
              content: title,
            },
            {
              property: 'og:description',
              content: metaDescription,
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              property: 'og:image',
              content:
                  'https://res.cloudinary.com/frebliklo/image/upload/c_scale,f_auto,q_auto,w_1600/v1549399485/wedding/blomster.png',
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:creator',
              content: '@klovborg',
            },
            {
              name: 'twitter:title',
              content: title,
            },
            {
              name: 'twitter:description',
              content: metaDescription,
            },
          ]
            .concat(
              keywords.length > 0
                ? {
                  name: 'keywords',
                  content: keywords.join(', '),
                }
                : []
            )
            .concat(meta)

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={metaValues}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'da',
  meta: [],
  keywords: [],
  noIndex: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  noIndex: PropTypes.bool,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
