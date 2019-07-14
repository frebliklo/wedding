/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import PropTypes from 'prop-types'
import { darken } from 'polished'

import Container from '../components/container'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { colors } from '../utils/theme'
import ListItem from '../components/listItem'

const list = [
  { key: 'oplevelser', text: 'Oplevelser med giveren' },
  { key: 'kassrolle', text: 'Eva Solo kasserolle 1,1L rustfrit stål', link: 'https://www.evasolo.com/da/kokken/gryder-og-pander/kasseroller/rustfrit-stal/202411/' },
  { key: 'test', text: 'Eva Solo sautepande 24cm', link: 'https://www.evasolo.com/' },
  { key: 'granit', text: 'Mørk granitplade til køkken (49 x 57 x 2.7 cm)' },
  { key: 'vacuum', text: 'Støvsuger (Nilfisk Select LBCO13P08A1)', link: 'https://www.skousen.dk/hus-have/stoevsuger/stoevsuger/product/nilfisk-select-lbco13p08a1/' },
  { key: 'sousvide', text: 'Sous-vide' },
  { key: 'utencils', text: 'Villeroy & Boch Arthur bestik', link: 'https://www.illumsbolighus.dk/shop/arthur-bestikaeske-24-dele-901117632' },
  { key: 'bubbles', text: 'Bobbler', link: 'https://www.youtube.com/watch?v=5NzPd-xW4YY' },
]

const Wishlist = ({ location }) => (
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
          {list.map(item => <ListItem key={item.key} text={item.text} link={item.link} />)}
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
