import { Box, Button, Stack, Typography } from "@mui/material";
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

function Home() {
  return (
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
      <Stack spacing={2} sx={{ maxWidth: 700, textAlign: "left" }}>
        <Typography
          variant="h1"
          sx={{
            m: 0,
            fontSize: { xs: 38, md: 54 },
            fontWeight: 800,
            letterSpacing: -1.5,
          }}
        >
          La musica del momento
        </Typography>

        <Typography color="text.secondary">
          Consulta le classifiche italiane e cerca canzoni, album e artisti.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          alignItems="flex-start"
          sx={{ pt: 1 }}
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
          <Button
            component={Link}
            to="/ricerca"
            variant="contained"
            sx={primaryButtonStyle}
          >
            Cerca
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Home;
