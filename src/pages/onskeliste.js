/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import PropTypes from 'prop-types'
import { darken } from 'polished'
import { useStaticQuery, graphql } from 'gatsby'

import Container from '../components/container'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { colors } from '../utils/theme'
import ListItem from '../components/listItem'

const wishesQuery = graphql`
  query WishesQuery {
    allContentfulOnsker(sort: {fields: createdAt}) {
      nodes {
        contentful_id
        titel
        link
      }
    }
  }
`

const Wishlist = ({ location }) => {
  const wishes = useStaticQuery(wishesQuery)

  return (
    <Layout marginTop={48} footer={true} path={location.pathname}>
      <SEO title="Ønskeliste" keywords={['bryllup', 'ønskeliste', 'praktisk info']} />
      <section css={styles.section}>
        <Container>
          <h1 css={styles.title}>Ønskeliste</h1>
          <p>Vi ønsker os <em css={{ margin: '0 .25rem 0 .125rem' }}>allermest</em> at komme på en skøn bryllupsrejse.</p>
          <p css={{ marginBottom: '.75rem' }}>Derfor kan bidrag til denne overføres til:</p>
          <div css={styles.accountContainer}>
            <div css={styles.accountLine}>
              <p css={{ ...styles.accountColumnOne, ...styles.accountText }}>Reg:</p>
              <p css={styles.accountText}>0400</p>
            </div>
            <div css={styles.accountLine}>
              <p css={{ ...styles.accountColumnOne, ...styles.accountText }}>Konto:</p>
              <p css={styles.accountText}>4022057796</p>
            </div>
            <p css={{ marginBottom: '2rem' }}>Eller via MobilePay.</p>
          </div>
          <h3 css={{ color: colors.orange.darkest }}>Andre ønsker</h3>
          <ul>
            {wishes.allContentfulOnsker.nodes.map((item, i) => <ListItem key={i} text={item.titel} link={item.link} />)}
          </ul>
        </Container>
      </section>
    </Layout>
  )
}

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
  accountContainer: {
    marginBottom: '.25rem',
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
