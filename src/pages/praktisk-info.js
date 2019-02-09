import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

const PracticalInfo = () => (
  <Layout footer={true}>
    <SEO title="Praktisk info" keywords={['bryllup', 'fest', 'praktisk info']} />
    <section css={styles.section}>
      <Container>
        <h1>Praktisk info</h1>
        <h2>Indlogering</h2>
        <p>Der vil være sovepladser til alle gæster, der vil blive og sove.</p>
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
    width: '100vw',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default PracticalInfo
