import React from 'react'
import PropTypes from 'prop-types'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

import { colors } from '../utils/theme'

class PigeonMap extends React.Component {
  render() {
    const { initialCenter, onClick, zoom } = this.props

    return (
      <Map center={initialCenter} zoom={zoom}>
        <Marker anchor={initialCenter} payload={1} />
        <Overlay anchor={initialCenter} offset={[80,130]}>
          <div css={styles.overlayContainer} onClick={onClick}>
            <h3 css={styles.title}>Nørrevang</h3>
            <p css={styles.text}>Eriksmindevej 25</p>
            <p css={styles.text}>4581 Rørvig</p>
          </div>
        </Overlay>
      </Map>
    )
  }
}

const styles = {
  overlayContainer: {
    width: 160,
    padding: '1rem',
    background: colors.bg,
    borderRadius: 4,
    boxShadow: '0 2px 15px rgba(0,0,0,.2)',
    cursor: 'pointer'
  },
  title: {
    fontSize: 20,
    marginBottom: 2
  },
  text: {
    fontSize: 14,
    margin: 0
  }
}

PigeonMap.propTypes = {
  zoom: PropTypes.number,
  initialCenter: PropTypes.array,
  onClick: PropTypes.func
}

PigeonMap.defaultProps = {
  zoom: 11,
  initialCenter: [
    55.964940,
    11.782046
  ]
}

export default PigeonMap
