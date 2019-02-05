import facepaint from 'facepaint'

const breakpoints = [576, 768, 992, 1200]

export const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

const orange = {
  lightest: '#FBC0A2',
  lighter: '#FBC0A2',
  normal: '#F67737',
  darker: '#B14008',
  darkest: '#371301'
}

const green = {
  lightest: '#DEEDCF',
  lighter: '#DEEDCF',
  normal: '#70C274',
  darker: '#1D9A6C',
  darkest: '#1D9A6C'
}

const blue = {
  lightest: '#9ED9D2',
  lighter: '#9ED9D2',
  normal: '#5CA2BB',
  darker: '#1D4B9A',
  darkest: '#1D4B9A'
}

export const colors = {
  fg: '#07271B',
  bg: '#FBFAF9',
  orange,
  green,
  blue
}
