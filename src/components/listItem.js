/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import PropTypes from 'prop-types'
import LinkIcon from './linkIcon'
import wishLinkStyles from './styled/wishLinkStyles'

const ListItem = ({ text, link, ...rest }) => {
  return !link ? <li {...rest}>{text}</li> : (
    <li {...rest}>
      <a href={link} target="_blank" rel="noopener noreferer" css={wishLinkStyles}>
        {text}
        <LinkIcon width={12} height={12} />
      </a>
    </li>
  )
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string
}

export default ListItem
