import base from '@hackclub/theme'
import { merge } from 'lodash'

const theme = base as any

theme.useColorSchemeMediaQuery = false

theme.buttons.primary = merge(theme.buttons.primary, {
  textTransform: 'uppercase'
})

theme.layout.copy.maxWidth = [null, null, 'copyPlus']

theme.text.title.fontSize = [5, 6]

// Better link colors for dark mode
theme.styles = theme.styles || {}
theme.styles.a = {
  color: 'primary',
  textDecoration: 'underline',
  ':hover': {
    textDecoration: 'none'
  }
}

// Override link colors for better readability in dark mode
theme.colors = theme.colors || {}
theme.colors.modes = theme.colors.modes || {}
theme.colors.modes.dark = theme.colors.modes.dark || {}
theme.colors.modes.dark.primary = '#5bc0de' // Lighter blue for better contrast in dark mode

export default theme

