import React from 'react'
import PropTypes from 'prop-types'
import { rgba } from 'polished'

import { colors } from '../utils/theme'

const LinkIcon = ({ width, height, fill, ...rest }) => (
  <svg className="icon-link" height={height} width={width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" { ...rest }>
    <title>Link</title>
    <desc>Icon indicating a link to another website</desc>
    <g fill={fill}>
      <path className="secondary" d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"/>
      <path className="primary" d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"/>
    </g>
  </svg>
)

LinkIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

LinkIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: rgba(colors.fg, .4)
}

export default LinkIcon
