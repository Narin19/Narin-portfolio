import { Box, Container, Grid } from '@mui/material'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <Box id="projects" component="section" sx={{ py: { xs: '35px', md: '50px' } }}>
      <Container>
        <SectionHeading
          eyebrow={`projects · ${projects.length}`}
          title="Things I've built"
        />
        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {projects.map((p, i) => (
            <Grid item xs={12} sm={6} md={4} key={p.name}>
              <ProjectCard project={p} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
