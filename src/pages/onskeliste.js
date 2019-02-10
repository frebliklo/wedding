import React from 'react'
import PropTypes from 'prop-types'
import { darken } from 'polished'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

import { colors } from '../utils/theme'

const Wishlist = ({ location }) => (
  <Layout footer={true} path={location.pathname}>
    <SEO title="Ønskeliste" keywords={['bryllup', 'ønskeliste', 'praktisk info']} />
    <section css={styles.section}>
      <Container>
        <h1 css={styles.title}>Ønskeliste</h1>
        <p>Vi ønsker os <em css={{ margin: '0 .25rem 0 .125rem' }}>allermest</em> at komme på en skøn bryllupsrejse.</p>
        <p>Derfor kan bidrag til denne overføres til:</p>
        <div css={styles.accountContainer}>
          <div css={styles.accountLine}>
            <p css={{ ...styles.accountColumnOne, ...styles.accountText }}>Reg:</p>
            <p css={styles.accountText}>0400</p>
          </div>
          <div css={styles.accountLine}>
            <p css={{ ...styles.accountColumnOne, ...styles.accountText }}>Konto:</p>
            <p css={styles.accountText}>4022057796</p>
          </div>
        </div>
        <h3 css={{ color: colors.orange.darkest }}>Andre ønsker</h3>
        <ul>
          <li>Oplevelser med giveren</li>
          <li>Eva Solo kasserolle 1,1L rustfrit stål</li>
          <li>Jamie Oliver/Tefal stålwok med håndtag 28cm</li>
          <li>Granitplade til køkken</li>
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
  },
  accountContainer: {
    marginBottom: '2rem',
    padding: '0 1rem'
  },
  accountLine: {
    display: 'flex'
  },
  accountColumnOne: {
    width: '3rem'
  },
  accountText: {
    marginBottom: '.5rem',
    color: darken(.2, colors.green.darkest)
  }
}

Wishlist.propTypes = {
  location: PropTypes.object.isRequired
}

export default Wishlist
