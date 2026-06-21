import { createContext, useMemo, useState } from 'react'
import { Box, ThemeProvider, CssBaseline } from '@mui/material'
import { createAppTheme } from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const ColorModeContext = createContext({ mode: 'dark', toggleMode: () => {} })

function getInitialMode() {
  try {
    const saved = localStorage.getItem('colorMode')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [mode, setMode] = useState(getInitialMode)

  const toggleMode = () =>
    setMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      try { localStorage.setItem('colorMode', next) } catch {}
      return next
    })

  const theme = useMemo(() => createAppTheme(mode), [mode])

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
