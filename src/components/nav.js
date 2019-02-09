import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { Link } from 'gatsby'
import { colors } from '../utils/theme'

const NavContainer = posed.nav({
  enter: {
    opacity: 1,
    delayChildren: 200,
    staggerChildren: 100
  },
  exit: {
    opacity: 0,
    staggerChildren: 100,
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

    this.state = {
      navOpen: false
    }
  }
  
  handleClick = () => {
    this.setState({ navOpen: !this.state.navOpen })
    console.log(this.state.navOpen)
  }
  
  render() {
    const { navOpen } = this.state

    return (
      <>
        <PoseGroup>
          {navOpen && (
            <NavContainer key="navContainer" css={styles.navContainer}>
              <NavLink to="/">Sara + Frederik</NavLink>
              <NavLink to="/praktisk-info">Praktisk info</NavLink>
            </NavContainer>)
          }
        </PoseGroup>
        <button css={styles.menuButton} onClick={this.handleClick}>Menu</button>
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
    left: 16
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
    background: colors.bg
  }
}

export default Nav
