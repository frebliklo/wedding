/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Container from '../components/container'
import Layout from '../components/layout'
import PigeonMap from '../components/pigeonMap'
import SEO from '../components/seo'

import { colors, mq } from '../utils/theme'

class Colony extends React.Component {
  onGetDirections = () => {
    window.open(this.props.mapsLink)
  }

  render() {
    const { location, mapsLink, colonyLink } = this.props

    return (
      <Layout footer={true} path={location.pathname}>
        <SEO title="Kolonien" keywords={['bryllup', 'fest', 'kolonien', 'lokation']} />
        <section css={styles.mapContainer}>
          <PigeonMap onClick={this.onGetDirections} />
        </section>
        <section css={styles.section}>
          <Container styles={styles.container}>
            <h1 css={styles.title}>Kolonien</h1>
            <p>Festen bliver holdt på feriekolonien Nørrevang i Rørvig.<br />Der vil være sovepladser på firemands sovesale til alle, der vil overnatte. Se hvad man selv skal medbringe på siden med <Link css={styles.link} to="/praktisk-info">praktisk information</Link>.</p>
            <p>Adressen på kolonien er <a target="_blank" rel="noopener noreferer" href={mapsLink}>Eriksmindevej 25, 4581 Rørvig</a>. Det tager cirka halvanden time i bil fra København - <a target="_blank" rel="noopener noreferer" href={mapsLink}>få rutevejledning på Google Map <span css={styles.link}>her</span></a>.</p>
            <a target="_blank" rel="noopener noreferer" href={colonyLink}>Find mere info om kolonien <span css={styles.link}>her</span>.</a>
          </Container>
        </section>
      </Layout>
    )
  }
}

const styles = {
  mapContainer: {
    width: '100%',
    height: '45vh',
    background: 'red'
  },
  container: {
    padding: '2rem 1rem',
    [mq[1]]: {
      padding: '3rem 1rem 2rem'
    }
  },
  section: {
    position: 'relative',
    width: '100%',
    minHeight: '40vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: '2rem',
    color: colors.orange.darker
  },
  link: {
    textDecoration: 'underline'
  }
}

Colony.propTypes = {
  location: PropTypes.object.isRequired,
  mapsLink: PropTypes.string,
  colonyLink: PropTypes.string
}

Colony.defaultProps = {
  mapsLink: 'https://www.google.com/maps/dir/?api=1&destination=Eriksmindevej%2025%20r%C3%B8rvig',
  colonyLink: 'https://kolonierne.dk/koloni/noerrevang-2/'
}

export default Colony
