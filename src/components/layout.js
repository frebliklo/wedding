import React from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import { TransitionState } from 'gatsby-plugin-transition-link'

import Footer from './footer'
import Nav from './nav'

import './global.css'

const Screen = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
})

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
    const { children, footer, path } = this.props
    const { minHeight } = this.state

    return (
      <TransitionState>
        {({ transitionStatus }) => (
          <Screen
            css={{ ...styles.screen, minHeight }}
            pose={
              ['entering', 'entered'].includes(transitionStatus)
                ? 'visible'
                : 'hidden'
            }
          >
            <Nav location={path} />
            <main css={styles.content}>{children}</main>
            {footer && <Footer />}
          </Screen>
        )}
      </TransitionState>
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
    flex: 1
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.bool,
  path: PropTypes.string.isRequired
}

Layout.defaultProps = {
  footer: true
}

export default Layout
