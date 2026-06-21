import { Box, Container, Typography, Button, Stack, Paper } from '@mui/material'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <Box id="contact" component="section" sx={{ py: { xs: '35px', md: '50px' } }}>
      <Container>
        <Paper
          elevation={0}
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 4,
            p: { xs: 4, md: 8 },
            color: '#fff',
            bgcolor: 'primary.dark',
            background: 'linear-gradient(135deg, #312E81 0%, #4338CA 55%, #0E7490 130%)',
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: 'rgba(255,255,255,0.7)', display: 'block', mb: 1.5 }}
          >
            {'// '}contact
          </Typography>
          <Typography variant="h3" sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' }, mb: 2 }}>
            Let&apos;s build something together
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.82)', maxWidth: 560, mb: 4 }}>
            I&apos;m open to React, React Native, frontend,  The fastest way
            to reach me is email — I usually reply within a day.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              href={`mailto:${profile.email}`}
              startIcon={<EmailRoundedIcon />}
              sx={{ bgcolor: '#fff', color: 'primary.dark', '&:hover': { bgcolor: '#F1F1FB' } }}
            >
            Say Hello 
            </Button>
            <Button
              variant="outlined"
              size="large"
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
              startIcon={<LinkedInIcon />}
              sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', '&:hover': { borderColor: '#fff' } }}
            >
              Connect on LinkedIn
            </Button>
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1.5, sm: 4 }}
            sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailRoundedIcon fontSize="small" /> <span>{profile.email}</span>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneRoundedIcon fontSize="small" /> <span>{profile.phone}</span>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <PlaceRoundedIcon fontSize="small" /> <span>{profile.location}</span>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}
