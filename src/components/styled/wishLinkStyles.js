import { css } from '@emotion/core'
import { darken, rgba } from 'polished'
import { colors } from '../../utils/theme'

const wishLinkStyles = css`
  position: relative;
  color: currentColor;
  transition: color 160ms ease-in;

  &::after {
    content: '';
    position: absolute;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    background: ${rgba(colors.blue.darker, 0)};
    transition: background 160ms ease-in;
  }

  &:hover, &:focus {
    color: ${darken(.02, colors.blue.darkest)};
    transition: color 200ms ease-out;

    &::after {
      background: ${rgba(colors.blue.darker, .8)};
      transition: background 200ms ease-out;
    }

    & > svg > g {
      fill: ${colors.blue.darkest};
      transition: fill 200ms ease-out;
    }
  }

  & > svg {
    margin-left: .333rem;

    & > g {
      fill: ${rgba(colors.fg, .4)};
      transition: fill 160ms ease-in;
    }
  }
`

export default wishLinkStyles
