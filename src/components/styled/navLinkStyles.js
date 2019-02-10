import { css } from '@emotion/core'
import { rgba } from 'polished'

import { colors } from '../../utils/theme'

const navLinkStyles = css`
  position: relative;
  font-size: 2rem;
  font-weight: 300;
  text-decoration: none;
  margin-bottom: 1rem;
  padding: .125rem .75rem;
  background: ${rgba(colors.orange.darker, 0)};
  color: ${colors.orange.normal};
  overflow: hidden;
  transition: background 160ms ease-in, color 160ms ease-in;

  &::after {
    content: '';
    height: .125rem;
    position: absolute;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${colors.orange.darker};
    transform: translateX(-400px);
    transition: transform 170ms ease-in;
  }

  &:hover, &:focus {
    background: ${rgba(colors.orange.darker, .05)};
    color: ${colors.orange.darker};
    transition: background 200ms ease-out, color 200ms ease-out;

    &::after {
      transform: translateX(0);
      transition: transform 200ms ease-out;
    }
  }

  &:active {
    background: ${rgba(colors.orange.darkest, .5)};
    color: ${colors.orange.lightest};
    transition: background 200ms ease-out, color 200ms ease-out;

    &::after {
      transform: translateX(0);
      transition: transform 200ms ease-out;
    }
  }

  &:focus {
    outline: 1px solid ${colors.green.darker};
  }

  @media (max-width: 360px) {
    & {
      font-size: 1.5rem;
    }
  }
`

export default navLinkStyles
