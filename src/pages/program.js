import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

import { colors } from '../utils/theme'

const Program = ({ location }) => (
  <Layout footer={true} path={location.pathname}>
    <SEO title="Program" keywords={['bryllup', 'fest', 'program']} />
    <section css={styles.section}>
      <Container>
        <h1 css={styles.title}>Program</h1>
        <h2>Lørdag</h2>
        <ul>
          <li>Kl.13.00 - 16.00 Indlogering</li>
          <li>Kl.16.00 Velkomst</li>
          <li>Kl.17.00 Middag og fest</li>
        </ul>
        <h2>Søndag</h2>
        <ul>
          <li>Kl.11.00 Morgenmad</li>
          <li>Kl.16.00 Seneste check-out</li>
        </ul>
      </Container>
    </section>
  </Layout>
)

const styles = {
  section: {
    position: 'relative',
    width: '100vw',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: '3rem',
    color: colors.orange.darker
  }
}

Program.propTypes = {
  location: PropTypes.object.isRequired
}

export default Program
