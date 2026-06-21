import { Box, Container, Grid, Typography, Paper } from '@mui/material'
import SectionHeading from './SectionHeading'
import { profile, stats } from '../data/profile'

export default function About() {
  return (
    <Box id="about" component="section" sx={{ py: { xs: '35px', md: '50px' } }}>
      <Container>
        <SectionHeading eyebrow="about" title="A bit about me" />
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
          <Grid item xs={12} md={7}>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.05rem' }}>
              {profile.summary}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid container spacing={2}>
              {stats.map((s) => (
                <Grid item xs={6} key={s.label}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 2, md: 2.5 },
                      height: '100%',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontWeight: 700,
                        fontSize: { xs: '1.8rem', md: '2.1rem' },
                        color: 'primary.main',
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.75 }}>
                      {s.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
