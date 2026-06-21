import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const indigo = '#4338CA'
const indigoLight = '#6366F1'
const cyan = '#06B6D4'

export function createAppTheme(mode) {
  const isDark = mode === 'dark'

  let theme = createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? indigoLight : indigo,
        light: indigoLight,
        dark: '#312E81',
        contrastText: '#fff',
      },
      secondary: { main: cyan, contrastText: '#04222b' },
      text: {
        primary: isDark ? '#E6EDF3' : '#101321',
        secondary: isDark ? '#8B949E' : '#5B6072',
      },
      background: {
        default: isDark ? '#0D1117' : '#F7F8FB',
        paper: isDark ? '#161B22' : '#FFFFFF',
      },
      divider: isDark ? '#30363D' : '#E7E9F2',
    },

    shape: { borderRadius: 14 },

    typography: {
      fontFamily: '"Inter", system-ui, sans-serif',
      h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05 },
      h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1 },
      h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, letterSpacing: '-0.02em' },
      h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, letterSpacing: '-0.01em' },
      h5: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
      h6: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
      subtitle1: { fontWeight: 500 },
      button: { fontWeight: 600, textTransform: 'none', letterSpacing: 0 },
      overline: {
        fontFamily: '"JetBrains Mono", monospace',
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        fontSize: '0.72rem',
      },
      body1: { lineHeight: 1.7 },
      body2: { lineHeight: 1.65 },
    },

    components: {
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { borderRadius: 10, paddingInline: 20, paddingBlock: 9 },
          containedPrimary: {
            boxShadow: isDark
              ? '0 8px 20px -8px rgba(99,102,241,0.6)'
              : '0 8px 20px -8px rgba(67,56,202,0.55)',
            '&:hover': {
              boxShadow: isDark
                ? '0 10px 24px -8px rgba(99,102,241,0.75)'
                : '0 10px 24px -8px rgba(67,56,202,0.65)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontFamily: '"JetBrains Mono", monospace',
            fontWeight: 500,
            fontSize: '0.74rem',
            letterSpacing: '-0.01em',
          },
          outlined: {
            borderColor: isDark ? '#30363D' : '#E7E9F2',
            backgroundColor: isDark ? '#161B22' : '#fff',
          },
        },
      },
      MuiPaper: {
        styleOverrides: { root: { backgroundImage: 'none' } },
      },
      MuiContainer: { defaultProps: { maxWidth: 'lg' } },
      MuiLink: {
        defaultProps: { underline: 'hover' },
        styleOverrides: { root: { fontWeight: 500 } },
      },
    },
  })

  return responsiveFontSizes(theme)
}
