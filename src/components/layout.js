import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import './global.css'

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      minHeight: 667
    }
  }

  componentDidMount() {
    this.setState({ minHeight: window.innerHeight })
  }
  
  render() {
    const { children, header, footer } = this.props
    const { minHeight } = this.state

    return (
      <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
          <div css={{ ...styles.screen, minHeight }}>
            {header && <Header siteTitle={data.site.siteMetadata.title} />}
            <main css={styles.content}>{children}</main>
            {footer && <Footer />}
          </div>
        )}
      />
    )
  }
}

const styles = {
  screen: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.bool,
  footer: PropTypes.bool
}

Layout.defaultProps = {
  header: true,
  footer: true
}

export default Layout
