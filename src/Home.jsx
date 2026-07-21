import { Box, Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router'

function Home() {
  return (
    <Box className="hero" sx={{ p: { xs: 3, md: 5 }, borderRadius: 3 }}>
      <Stack spacing={2} sx={{ maxWidth: 700 }}>
        <Typography variant="h1" sx={{ fontSize: { xs: 38, md: 54 } }}>La musica del momento</Typography>
        <Typography color="text.secondary">Consulta le classifiche italiane e cerca canzoni, album e artisti.</Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="flex-start">
          <Button component={Link} to="/classifica-canzoni" variant="contained">Classifica canzoni</Button>
          <Button component={Link} to="/classifica-album" variant="outlined">Classifica album</Button>
          <Button component={Link} to="/ricerca" variant="outlined">Cerca artisti</Button>
          <Button component={Link} to="/ricerca" variant="outlined">Cerca</Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Home
