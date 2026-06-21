import { useContext, useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Tooltip,
  useScrollTrigger,
} from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import { ColorModeContext } from '../App'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { mode, toggleMode } = useContext(ColorModeContext)
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 24 })

  useEffect(() => {
    if (open) setOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger])

  const handleNav = (id) => {
    setOpen(false)
    scrollTo(id)
  }

  const navbarBg = trigger
    ? mode === 'dark'
      ? 'rgba(13,17,23,0.88)'
      : 'rgba(255,255,255,0.82)'
    : 'transparent'

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: navbarBg,
        backdropFilter: trigger ? 'saturate(180%) blur(12px)' : 'none',
        borderBottom: trigger ? '1px solid' : '1px solid transparent',
        borderColor: 'divider',
        transition: 'all .25s ease',
        color: 'text.primary',
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Box
            onClick={() => scrollTo('top')}
            sx={{ display: 'flex', alignItems: 'center', gap: 1.2, cursor: 'pointer' }}
          >
            <Box
              sx={{
                width: 34,
                height: 34,
                borderRadius: 1.5,
                bgcolor: 'primary.main',
                color: '#fff',
                display: 'grid',
                placeItems: 'center',
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
              }}
            >
              N
            </Box>
            <Typography sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 }}>
              Narin&nbsp;Mandrawlia
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {links.map((l) => (
              <Button key={l.id} color="inherit" onClick={() => scrollTo(l.id)} sx={{ fontWeight: 500 }}>
                {l.label}
              </Button>
            ))}

            <Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
              <IconButton onClick={toggleMode} color="inherit" sx={{ mx: 0.5 }} aria-label="Toggle colour mode">
                {mode === 'dark' ? <LightModeRoundedIcon fontSize="small" /> : <DarkModeRoundedIcon fontSize="small" />}
              </IconButton>
            </Tooltip>

            <Button variant="contained" onClick={() => scrollTo('contact')} sx={{ ml: 1 }}>
              Get in touch
            </Button>
          </Box>

          {/* Mobile: toggle + hamburger */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 0.5 }}>
            <Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
              <IconButton onClick={toggleMode} color="inherit" aria-label="Toggle colour mode">
                {mode === 'dark' ? <LightModeRoundedIcon fontSize="small" /> : <DarkModeRoundedIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <MenuRoundedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          <List>
            {links.map((l) => (
              <ListItemButton key={l.id} onClick={() => handleNav(l.id)} sx={{ borderRadius: 2 }}>
                <ListItemText primaryTypographyProps={{ fontWeight: 500 }} primary={l.label} />
              </ListItemButton>
            ))}
          </List>
          <Button fullWidth variant="contained" onClick={() => handleNav('contact')} sx={{ mt: 1 }}>
            Get in touch
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  )
}
