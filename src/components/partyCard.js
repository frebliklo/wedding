import React from 'react'
import PropTypes from 'prop-types'

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
    maxWidth: '20rem',
    marginBottom: '1.5rem'
  },
  title: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: '700',
    marginBottom: '.25rem'
  },
  date: {
    fontSize: '2rem',
    lineHeight: '1.5rem',
    fontWeight: '300',
    marginBottom: '.25rem'
  },
  location: {
    fontWeight: '300'
  }
}

PartyCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default PartyCard
