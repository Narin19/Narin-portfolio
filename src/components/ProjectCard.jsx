import { Box, Paper, Typography, Chip, Stack } from '@mui/material'

export default function ProjectCard({ project, index }) {
  const { name, subtitle, type, tech, points, accent } = project

  return (
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
        transition: 'transform .22s ease, box-shadow .22s ease, border-color .22s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 18px 40px -22px rgba(16,19,33,0.45)',
          borderColor: 'transparent',
        },
        '@media (prefers-reduced-motion: reduce)': { '&:hover': { transform: 'none' } },
      }}
    >
      <Box sx={{ height: 4, bgcolor: accent }} />
      <Box sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography
            variant="overline"
            sx={{ color: 'text.secondary', fontSize: '0.68rem', letterSpacing: '0.14em' }}
          >
            {type}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.78rem',
              color: 'text.secondary',
              opacity: 0.6,
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </Typography>
        </Stack>

        <Typography variant="h5" component="h3" sx={{ fontSize: '1.3rem', mb: 0.5 }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 500, mb: 2 }}>
          {subtitle}
        </Typography>

        <Box component="ul" sx={{ pl: 2.2, m: 0, mb: 2.5, flexGrow: 1 }}>
          {points.map((p, i) => (
            <Box
              component="li"
              key={i}
              sx={{
                color: 'text.secondary',
                fontSize: '0.92rem',
                lineHeight: 1.6,
                mb: 1,
                '&::marker': { color: accent },
              }}
            >
              {p}
            </Box>
          ))}
        </Box>

        <Stack direction="row" flexWrap="wrap" gap={0.75}>
          {tech.map((t) => (
            <Chip
              key={t}
              label={t}
              size="small"
              variant="outlined"
              sx={{ height: 24, fontSize: '0.7rem' }}
            />
          ))}
        </Stack>
      </Box>
    </Paper>
  )
}
