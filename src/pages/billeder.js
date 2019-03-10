import React from 'react'

import Container from '../components/container'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { colors } from '../utils/theme'

const Images = () => (
  <Layout footer>
    <SEO title="Billeder" keywords={['bryllup', 'billeder']} />
    <section css={styles.section}>
      <Container>
        <h1 css={styles.title}>Billeder</h1>
        <p>Send os meget gerne jeres billeder fra dagen, så vi kan lægge dem op her.</p>
        <p>Billeder kan sendes på mail til Sara på <a href="mailto:sara.jerichau@gmail.com, klovborg@gmail.com?subject=Billeder fra en dejlig, dejlig dag&cc=julie_vh1@hotmail.com" css={styles.link}>sara.jerichau@gmail.com</a></p>
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
  },
  link: {
    textDecoration: 'underline'
  }
}

export default Images
