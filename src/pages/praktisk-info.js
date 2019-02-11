import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

import { colors } from '../utils/theme'

const PracticalInfo = ({ location }) => (
  <Layout footer={true} path={location.pathname}>
    <SEO title="Praktisk info" keywords={['bryllup', 'fest', 'praktisk info']} />
    <section css={styles.section}>
      <Container>
        <h1 css={styles.title}>Praktisk info</h1>
        <h2>Indlogering</h2>
        <p>Der vil være sovepladser på firemands sovesale til alle gæster, der vil blive og sove.</p>
        <p>Gæster skal selv medbringe følgende:</p>
        <ul>
          <li>Lagen</li>
          <li>Sengetøj</li>
          <li>Dyne eller sovepose</li>
          <li>Håndklæde</li>
        </ul>
        <p>Sovesale skal fejes inden afrejse.</p>
        <p>Afrejse senest kl.16.00 søndag</p>
      </Container>
    </section>
  </Layout>
)

const styles = {
  section: {
    position: 'relative',
    width: '100%',
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

PracticalInfo.propTypes = {
  location: PropTypes.object.isRequired
}

export default PracticalInfo
