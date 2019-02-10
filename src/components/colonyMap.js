/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react'

import { colors } from '../utils/theme'

class ColonyMap extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const { google, zoom, initialCenter, onClick } = this.props
    const { showingInfoWindow, activeMarker } = this.state

    return (
      <Map
        google={google}
        draggable={true}
        scrollwheel={true}
        keyboardShortcuts={true}
        disableDoubleClickZoom={false}
        zoomControl={false}
        mapTypeControl={false}
        scaleControl={false}
        streetViewControl={false}
        panControl={false}
        rotateControl={false}
        fullscreenControl={true}
        zoom={zoom}
        style={styles.map}
        initialCenter={initialCenter}
        onClick={onClick}
      >
        <Marker
          title="Nørrevang"
          position={initialCenter}
          onClick={this.onMarkerClick}
          draggable={false}
        />
        <InfoWindow
          onClose={this.onClose}
          visible={showingInfoWindow}
          marker={activeMarker}
        >
          <div css={styles.infoContainer}>
            <h3 css={styles.infoTitle}>Nørrevang</h3>
            <p css={styles.infoText}>Eriksmindevej 25</p>
            <p css={styles.infoText}>4581 Rørvig</p>
          </div>
        </InfoWindow>
      </Map>     
    )
  }
}

const styles = {
  map: {
    width: '100%',
    height: '45vh',
  },
  infoContainer: {
    padding: '7px 5px',
    minWidth: '6rem'
  },
  infoTitle: {
    fontSize: '1.25rem',
    color: colors.blue.darker,
    marginBottom: 4
  },
  infoText: {
    fontSize: '1rem',
    marginBottom: 2
  }
}

ColonyMap.propTypes = {
  google: PropTypes.object,
  zoom: PropTypes.number,
  initialCenter: PropTypes.object,
  onClick: PropTypes.func
}

ColonyMap.defaultProps = {
  zoom: 12,
  initialCenter: {
    lat: 55.964940,
    lng: 11.782046
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API
})(ColonyMap)
