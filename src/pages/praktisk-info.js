import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

import { colors } from '../utils/theme'

const PracticalInfo = ({ location }) => (
  <Layout footer={true} path={location.pathname}>
    <SEO
      title="Praktisk info"
      keywords={['bryllup', 'fest', 'praktisk info']}
    />
    <section css={styles.section}>
      <Container>
        <h1 css={styles.title}>Praktisk info</h1>
        <h2>Indslag</h2>
        <p>
          Toastmaster for aftenen er Simon Gray. Man kan kontakte Simon på
          simongray@gmail.com
        </p>
        <p>
          Taler og kreative indslag må gerne meldes til toastmasteren helst en
          uge før festen
        </p>
        <h2>Ankomst</h2>
        <p>
          Alle er velkomne på kolonien fra lørdag kl13.00, dog er der først
          planlagt program fra kl16.00.
        </p>
        <p>Parkering kan ske på fodboldbanen foran kolonien.</p>
        <p>
          Der er to kolonier på samme vej. Vi holder til på Nørrevang, som er
          for enden af vejen.
        </p>
        <h2>Indlogering og sovesale</h2>
        <p>
          Der vil være sovepladser på firemands sovesale til alle gæster, der
          vil blive og sove.
        </p>
        <p>Gæster skal selv medbringe følgende:</p>
        <ul>
          <li>Lagen (enkeltmandslagn)</li>
          <li>Sengetøj</li>
          <li>Dyne eller sovepose</li>
          <li>Håndklæde</li>
        </ul>
        <p>Sovesale skal fejes inden afrejse.</p>
        <p>Afrejse senest kl.16.00 søndag</p>
        <h2>Dresscode</h2>
        <p>Kom i noget, som du selv synes er rigtig flot og festligt</p>
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
    alignItems: 'center',
  },
  title: {
    fontSize: '3rem',
    color: colors.orange.darker,
  },
}

PracticalInfo.propTypes = {
  location: PropTypes.object.isRequired,
}

export default PracticalInfo
