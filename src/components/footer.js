import React from 'react'
import { Link } from 'gatsby'

import Container from './container'

const Footer = () => (
  <footer css={styles.wrapper}>
    <Container>
      <Link to="/">&copy; Sara + Frederik</Link>
    </Container>
  </footer>
)

const styles = {
  wrapper: {
    marginTop: '2rem'
  }
}

export default Footer
