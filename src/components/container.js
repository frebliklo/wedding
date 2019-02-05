import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children, styles }) => (
  <div css={{ ...containerStyles, ...styles }}>
    {children}
  </div>
)

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  width: '100%',
  maxWidth: 688,
  padding: '0 1rem 2rem',
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object
}

export default Container
