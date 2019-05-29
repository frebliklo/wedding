import React from 'react'
import PropTypes from 'prop-types'

import Footer from './footer'
import Nav from './nav'

import './global.css'

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      minHeight: 667
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.setState({ minHeight: window.innerHeight }))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.setState({ minHeight: window.innerHeight }))
  }
  
  render() {
    const { children, footer, path, marginTop } = this.props
    const { minHeight } = this.state

    return (
      <div css={{ ...styles.screen, minHeight }} >
        <Nav location={path} />
        <main css={{ ...styles.content, marginTop }}>{children}</main>
        {footer && <Footer />}
      </div>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.bool,
  path: PropTypes.string.isRequired,
  marginTop: PropTypes.number,
}

Layout.defaultProps = {
  footer: true
}

export default Layout
