import { Box, Container, Grid, Typography, Chip, Stack } from '@mui/material'
import * as Si from 'react-icons/si'
import SectionHeading from './SectionHeading'
import { skills } from '../data/profile'

function SkillIcon({ name }) {
  if (!name) return null
  const Icon = Si[name]
  if (!Icon) return null
  return <Icon size={13} style={{ marginRight: 2, flexShrink: 0 }} />
}

export default function Skills() {
  return (
    <Box
      id="skills"
      component="section"
      sx={{ py: { xs: '35px', md: '50px' }, bgcolor: 'background.paper', borderBlock: '1px solid', borderColor: 'divider' }}
    >
      <Container>
        <SectionHeading eyebrow="skills" title="Tools I build with" />
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {skills.map((cat) => (
            <Grid item xs={12} sm={6} md={4} key={cat.group}>
              <Typography
                variant="overline"
                sx={{ color: 'text.secondary', display: 'block', mb: 1.5 }}
              >
                {cat.group}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {cat.items.map((item) => (
                  <Chip
                    key={item.label}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <SkillIcon name={item.icon} />
                        {item.label}
                      </Box>
                    }
                    variant="outlined"
                    size="small"
                  />
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
