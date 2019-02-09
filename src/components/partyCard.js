import React from 'react'
import PropTypes from 'prop-types'
import { mq, colors } from '../utils/theme'

const PartyCard = ({ title, date, location }) => (
  <div css={styles.wrapper}>
    <h4 css={styles.title}>{title}</h4>
    <h2 css={styles.date}>{date}</h2>
    <p css={styles.location}>{location}</p>
  </div>
)

const styles = {
  wrapper: {
    padding: '1rem',
    minWidth: '8rem',
    maxWidth: '20rem',
    marginBottom: '1.5rem'
  },
  title: {
    fontSize: '.75rem',
    lineHeight: '1.2',
    fontWeight: '700',
    marginBottom: 0,
    color: colors.orange.darkest,
    [mq[1]]: {
      fontSize: '1rem',
      lineHeight: '1.5',
    }
  },
  date: {
    fontSize: '1.75rem',
    lineHeight: '1.2',
    fontWeight: '300',
    marginBottom: 0,
    [mq[1]]: {
      fontSize: '1.5rem',
      lineHeight: '1.5',
    }
  },
  location: {
    fontSize: '.65rem',
    fontWeight: '400',
    [mq[1]]: {
      fontSize: '1rem',
      fontWeight: '300'
    }
  }
}

PartyCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default PartyCard
