import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded'
import { profile } from '../data/profile'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <Box
      id="top"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 14, md: '110px' },
        pb: { xs: 8, md: '50px' },
        // soft brand glow — restrained, one signature flourish
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(60% 50% at 18% 0%, rgba(99,102,241,0.16), transparent 60%), radial-gradient(50% 45% at 95% 10%, rgba(6,182,212,0.14), transparent 55%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container sx={{ position: 'relative' }}>
        <Box sx={{ maxWidth: 820 }}>
          <Chip
            label="React.js · React Native "
            sx={{
              mb: 3,
              px: 0.5,
              bgcolor: 'rgba(99,102,241,0.08)',
              color: 'primary.main',
              border: '1px solid rgba(99,102,241,0.30)',
              fontWeight: 500,
            }}
          />

          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2.6rem', sm: '3.6rem', md: '4.6rem' }, mb: 2 }}
          >
            {profile.name}
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              color: 'primary.main',
              fontFamily: '"JetBrains Mono", monospace',
              fontWeight: 500,
              fontSize: { xs: '1rem', md: '1.25rem' },
              mb: 3,
            }}
          >
            {profile.role}
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'text.secondary',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              maxWidth: 680,
              mb: 4,
            }}
          >
            {profile.tagline}
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowDownwardRoundedIcon />}
              onClick={() => scrollTo('projects')}
            >
              View my work
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<EmailRoundedIcon />}
              onClick={() => scrollTo('contact')}
              sx={{ borderColor: 'divider', color: 'text.primary' }}
            >
              Contact me
            </Button>
            {profile.resumeUrl && (
              <Button
                variant="text"
                size="large"
                startIcon={<DescriptionRoundedIcon />}
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener"
              >
                Resume
              </Button>
            )}
          </Stack>

          <Stack direction="row" spacing={1}>
            <Button
              href={profile.github}
              target="_blank"
              rel="noopener"
              startIcon={<GitHubIcon />}
              sx={{ color: 'text.secondary', minWidth: 0 }}
            >
              GitHub
            </Button>
            <Button
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              startIcon={<LinkedInIcon />}
              sx={{ color: 'text.secondary', minWidth: 0 }}
            >
              LinkedIn
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
