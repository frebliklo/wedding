import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Signature from '../components/signature'
import Container from '../components/container'
import PartyCard from '../components/partyCard'

import { breakpoints, mq, colors } from '../utils/theme'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reception: {
        title: 'Reception',
        date: '15. juni 11:00',
        location: 'Københavns Rådhus'
      },
      party: {
        title: 'Fest',
        date: '26. oktober 16:00',
        location: 'Nørrevang, Rørvig'
      }
    }
  
  }

  handleResize = () => {
    if(window.innerWidth <= breakpoints[0]) {
      this.setState({
        reception: {
          ...this.state.reception,
          date: '15 / 6',
        },
        party: {
          ...this.state.party,
          date: '26 / 10'
        }
      })
    } else {
      this.setState({
        reception: {
          ...this.state.reception,
          date: '15. juni 11:00',
        },
        party: {
          ...this.state.party,
          date: '26. oktober 16:00'
        }
      })
    }
  }

  componentDidMount() {
    if(window.innerWidth <= breakpoints[0]) {
      this.setState({
        reception: {
          ...this.state.reception,
          date: '15 / 6',
        },
        party: {
          ...this.state.party,
          date: '26 / 10'
        }
      })
    }

    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    const { pathname } = this.props.location
    const { reception, party } = this.state

    return (
      <Layout path={pathname} footer={false}>
        <SEO title="Bryllup" keywords={['bryllup', 'fest', 'praktisk info']} />
        <section css={styles.section}>
          <Container styles={{ alignItems: 'center', padding: '0 1rem 2rem' }}>
            <h1 css={styles.title}>
              <Signature fill={colors.green.darker} />
            </h1>
            <div css={styles.partiesContainer}>
              <PartyCard
                title={reception.title}
                date={reception.date}
                location={reception.location}
              />
              <PartyCard
                title={party.title}
                date={party.date}
                location={party.location}
              />
            </div>
          </Container>
          <img css={styles.flowers} src="https://res.cloudinary.com/frebliklo/image/upload/c_scale,f_auto,q_auto,w_1600/v1549399485/wedding/blomster.png" />
        </section>
      </Layout>
    )
  }
}

const styles = {
  section: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    margin: '3rem 0',
    // [mq[2]]: {
    //   margin: '3rem 0'
    // }
  },
  partiesContainer: {
    width: '90%',
    maxWidth: breakpoints[1],
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  flowers: {
    position: 'fixed',
    top: 'auto',
    right: 0,
    bottom: 0,
    left: 'auto',
    margin: 0,
    [mq[2]]: {
      width: '60%'
    }
  }
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default IndexPage
