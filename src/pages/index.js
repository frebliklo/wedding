import React from 'react'

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
  
  componentDidMount() {
    if(window.innerWidth <= breakpoints[0]) {
      this.setState({
        reception: {
          ...this.state.reception,
          date: '15 / 6',
          // location: 'Kbh Rådhus'
        },
        party: {
          ...this.state.party,
          date: '26 / 10'
        }
      })
    }
  }

  render() {
    const { reception, party } = this.state

    return (
      <Layout header={false}>
        <SEO title="Bryllup" keywords={['bryllup', 'fest', 'praktisk info']} />
        <Container styles={styles.container}>
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
      </Layout>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    margin: '30vh 0',
    [mq[2]]: {
      margin: '3rem 0'
    }
  },
  partiesContainer: {
    width: '90%',
    maxWidth: breakpoints[1],
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

export default IndexPage
