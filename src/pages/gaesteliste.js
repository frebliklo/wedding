import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'

import { colors } from '../utils/theme'

const family = [
  'Niels',
  'Henriette',
  'Carsten',
  'Charlotte',
  'Adam',
  'Christine',
  'Magnus',
  'David',
  'Christian',
  'Peter',
  'Pernille',
  'Karen',
  'Nany',
  'Hans Henrik',
  'Jens',
  'Annette',
]

const friends = [
  'Julie VH',
  'Laura',
  'Kasper N',
  'Lisa',
  'Schjeldahl',
  'Benjamin',
  'Sabrina',
  'Simon',
  'Michala',
  'Pede',
  'Nikolas',
  'Helen',
  'Tania',
  'Stence',
  'Jakob S',
  'Patrick',
  'Sofie S',
  'Linnéa',
  'Emily',
  'Jacob W',
  'Rena',
  'Christopher',
  'Marie',
  'Frederik P',
  'Julie Anna',
  'Jesper',
  'Michael',
  'Sofie D',
  'Philip',
  'Kasper R',
  'Sabina',
]

const Guestlist = ({ location }) => (
  <Layout footer={true} path={location.pathname}>
    <SEO title="Gæsteliste" noIndex />
    <section css={styles.section}>
      <Container>
        <h1 css={styles.title}>Gæsteliste</h1>
        <h2>Familie</h2>
        <ul css={{ ...styles.list, marginBottom: '1.6rem' }}>
          {family.map((item, i) => (
            <li key={item + i}>{item}</li>
          ))}
        </ul>
        <h2>Venner</h2>
        <ul css={styles.list}>
          {friends.map((item, i) => (
            <li key={item + i}>{item}</li>
          ))}
        </ul>
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
  list: {
    listStyle: 'none',
  },
}

Guestlist.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Guestlist
