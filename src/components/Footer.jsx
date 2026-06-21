import { Box, Container, Typography, Stack, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ©  Designend & built by {profile.name}. 
          </Typography>
          <Stack direction="row" spacing={0.5}>
            <IconButton href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" size="small">
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" size="small">
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton href={`mailto:${profile.email}`} aria-label="Email" size="small">
              <EmailRoundedIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
