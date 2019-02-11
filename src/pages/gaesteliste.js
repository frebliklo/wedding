import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

import { colors } from '../utils/theme'

const Guestlist = ({ location }) => (
  <Layout footer={true} path={location.pathname}>
    <SEO title="Gæsteliste" keywords={['bryllup', 'fest', 'gæsteliste']} />
    <section css={styles.section}>
      <Container>
        <h1 css={styles.title}>Gæsteliste</h1>
        <p><em>Bliver opdateret den 15. maj</em></p>
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

Guestlist.propTypes = {
  location: PropTypes.object.isRequired
}

export default Guestlist
