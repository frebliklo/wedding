import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Signature from '../components/signature'
import Container from '../components/container'
import PartyCard from '../components/partyCard'

const IndexPage = () => (
  <Layout header={false}>
    <SEO title="Bryllup" keywords={['bryllup', 'fest', 'praktisk info']} />
    <Container styles={styles.container}>
      <h1 css={styles.title}>
        <Signature />
      </h1>
      <div css={styles.partiesContainer}>
        <PartyCard
          title="Reception"
          date="15. juni 11:00"
          location="Københavns Rådhus"
        />
        <PartyCard
          title="Fest"
          date="26. oktober 16:00"
          location="Nørrevang, Rørvig"
        />
      </div>
    </Container>
  </Layout>
)

const styles = {
  container: {
    flex: 1,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    margin: '3rem 0',
  },
  partiesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

export default IndexPage
