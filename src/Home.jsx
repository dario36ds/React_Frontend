import { useEffect, useState } from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router";

const primaryButtonStyle = {
  borderRadius: 999,
  px: 2.5,
  color: "common.white",
  background: "linear-gradient(135deg, #7c3aed, #ec4899)",
  boxShadow: "0 8px 20px rgba(124, 58, 237, 0.25)",
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    background: "linear-gradient(135deg, #6d28d9, #db2777)",
    boxShadow: "0 10px 24px rgba(124, 58, 237, 0.35)",
    transform: "translateY(-2px)",
  },
};

function TopSongs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("https://itunes.apple.com/it/rss/topsongs/limit=3/json")
      .then((response) => response.json())
      .then((data) => {
        setSongs(
          (data.feed?.entry || []).map((song) => ({
            id: song.id.attributes["im:id"],
            title: song["im:name"].label,
            artist: song["im:artist"].label,
          })),
        );
      })
      .catch(() => setSongs([]));
  }, []);

  return (
    <Paper variant="outlined" sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 4 }}>
      <Typography variant="h5" component="h2" sx={{ mb: 1, fontWeight: 800 }}>
        Top 3 canzoni
      </Typography>

      {songs.length === 0 && (
        <Typography color="text.secondary">Caricamento classifica...</Typography>
      )}

      {songs.map((song, index) => (
        <Stack
          key={song.id}
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            py: 1.5,
            borderBottom: index < songs.length - 1 ? 1 : 0,
            borderColor: "divider",
          }}
        >
          <Typography sx={{ width: 24, fontWeight: 800, color: "primary.main" }}>
            {index + 1}
          </Typography>
          <Box sx={{ minWidth: 0 }}>
            <Typography fontWeight={700} noWrap>
              {song.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {song.artist}
            </Typography>
          </Box>
        </Stack>
      ))}
    </Paper>
  );
}

function Home() {
  return (
    <Stack spacing={3}>
      <Box
        className="hero"
        sx={{
          p: { xs: 3, md: 5 },
          border: 1,
          borderColor: "divider",
          borderRadius: 4,
          background: (theme) =>
            "linear-gradient(135deg, " +
            theme.palette.secondary.main +
            "14, " +
            theme.palette.background.paper +
            " 65%, #ec489910)",
        }}
      >
        <Stack spacing={2} sx={{ width: "100%", textAlign: "left" }}>
        <Typography
          variant="h1"
          sx={{
            m: 0,
            maxWidth: 700,
            fontSize: { xs: 38, md: 54 },
            fontWeight: 800,
            letterSpacing: -1.5,
          }}
        >
          La musica del momento
        </Typography>

        <Typography color="text.secondary" sx={{ maxWidth: 700 }}>
          Consulta le classifiche italiane e cerca canzoni, album e artisti.
        </Typography>

        <Stack
          spacing={2}
          sx={{ pt: 1 }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            aria-label="Classifiche"
            sx={{
              width: "100%",
              "& > .MuiButton-root": {
                flex: 1,
                width: { xs: "100%", sm: "auto" },
              },
            }}
          >
            <Button
              component={Link}
              to="/classifica-canzoni"
              variant="contained"
              sx={primaryButtonStyle}
            >
              Classifica canzoni
            </Button>
            <Button
              component={Link}
              to="/classifica-album"
              variant="contained"
              sx={primaryButtonStyle}
            >
              Classifica album
            </Button>
            <Button
              component={Link}
              to="/classifica-podcast"
              variant="contained"
              sx={primaryButtonStyle}
            >
              Classifica podcast
            </Button>
          </Stack>

          <Box
            sx={{
              borderTop: 1,
              borderColor: "divider",
              pt: 2,
            }}
          >
            <Button
              component={Link}
              to="/ricerca"
              variant="contained"
              sx={{ ...primaryButtonStyle, width: "100%" }}
            >
              Esplora
            </Button>
          </Box>
        </Stack>
        </Stack>
      </Box>

      <TopSongs />
    </Stack>
  );
}

export default Home;
