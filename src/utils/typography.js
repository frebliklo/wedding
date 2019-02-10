import Typography from 'typography'

import { colors } from './theme'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerFontFamily: [
    'Aileron',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Aileron',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  headerWeight: '300',
  headerColor: colors.fg,
  bodyWeight: '300',
  bodyColor: colors.fg
})

export default typography
