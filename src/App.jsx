import { Box, Container } from '@mui/material'
import { Route, Routes } from 'react-router'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import AlbumsClassifica from './AlbumClassifica.jsx'
import CanzoniClassifica from './CanzoniClassifica.jsx'

function App() {
  return (
    <Box className="app-shell">
      <Navbar />
      <Container component="main" maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classifica-canzoni" element={<CanzoniClassifica />}/>
          <Route path="/classifica-album" element={<AlbumsClassifica />}/>
        </Routes>
      </Container>
      <Box component="footer" sx={{ py: 3, textAlign: 'center', color: 'text.secondary', fontSize: 14 }}>
        SoundRank · Dati forniti da Apple Music e iTunes
      </Box>
    </Box>
  )
}

export default App
