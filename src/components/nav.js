import React from 'react'
import PropTypes from 'prop-types'
import posed, { PoseGroup } from 'react-pose'
import Lottie from 'lottie-react-web'
import { rgba } from 'polished'
import { Link } from 'gatsby'

import navLinkStyles from './styled/navLinkStyles'

import menuAnimation from '../animations/menu-animation.json'

import { colors, mq } from '../utils/theme'

const NavContainer = posed.nav({
  enter: {
    opacity: 1,
    delayChildren: 200,
    staggerChildren: 100,
  },
  exit: {
    opacity: 0,
    staggerChildren: 50,
    staggerDirection: -1,
    afterChildren: true
  }
})

const NavLink = posed(Link)({
  enter: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: 48
  }
})

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.paths = [
      { to: '/', label: 'Sara & Frederik' },
      { to: '/kolonien', label: 'Kolonien' },
      { to: '/praktisk-info', label: 'Praktisk info' },
      { to: '/program', label: 'Program' },
      { to: '/gaesteliste', label: 'Gæsteliste' },
      { to: '/onskeliste', label: 'Ønskeliste' },
      { to: '/billeder', label: 'Billeder' },
    ]

    this.state = {
      navOpen: false
    }
  }
  
  handleMenuClick = () => {
    this.setState({ navOpen: !this.state.navOpen })
  }

  handleLinkClick = target => {
    if(target === this.props.location) {
      this.setState({ navOpen: false })
    }
  }
  
  render() {
    const { navOpen } = this.state
    
    return (
      <>
        <button css={styles.menuButton} onClick={this.handleMenuClick}>
          <Lottie
            width={24}
            height={24}
            direction={navOpen ? 1 : -1}
            options={{
              animationData: menuAnimation,
              loop: false,
            }}
          />
        </button>
        <PoseGroup>
          {navOpen && (
            <NavContainer key="navContainer" css={styles.navContainer}>
              {this.paths.map((path, i) => {
                const { to, label } = path

                return (
                  <NavLink
                    key={`navLink${i}`}
                    to={to}
                    css={navLinkStyles}
                    onClick={() => this.handleLinkClick(to)}
                  >  
                    {label}
                  </NavLink>
                )
              })}
            </NavContainer>)
          }
        </PoseGroup>
      </>
    )
  }
}

const styles = {
  menuButton: {
    position: 'absolute',
    top: 16,
    right: 'auto',
    bottom: 'auto',
    left: 8,
    zIndex: 5,
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    [mq[0]]: { left: 16 }
  },
  navContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: rgba(colors.bg, .95),
    zIndex: 1
  }
}

Nav.propTypes = {
  location: PropTypes.string.isRequired
}

export default Nav
