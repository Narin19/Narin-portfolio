import { Box, Typography } from '@mui/material'

export default function SectionHeading({ eyebrow, title, sx }) {
  return (
    <Box sx={{ mb: { xs: 4, md: 6 }, ...sx }}>
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{ color: 'secondary.dark', display: 'block', mb: 1 }}
        >
          <Box component="span" sx={{ color: 'primary.main' }}>{'// '}</Box>
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h3" component="h2" sx={{ fontSize: { xs: '1.7rem', md: '2.3rem' } }}>
        {title}
      </Typography>
    </Box>
  )
}
