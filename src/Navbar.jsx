import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router";
import useAppTheme from "./useAppTheme.js";

const links = [
  { label: "Home", path: "/" },
  { label: "Canzoni", path: "/classifica-canzoni" },
  { label: "Album", path: "/classifica-album" },
  { label: "Podcast", path: "/classifica-podcast" },
  { label: "Esplora", path: "/ricerca" },
];

function Navbar() {
  const { mode, toggleTheme } = useAppTheme();

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 72, sm: 80 },
            gap: { xs: 1.5, sm: 3 },
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "stretch", sm: "center" },
            justifyContent: "space-between",
            py: { xs: 1.5, sm: 1 },
          }}
        >
          <Box
            component={NavLink}
            to="/"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              alignSelf: { xs: "flex-start", sm: "auto" },
              color: "text.primary",
              textDecoration: "none",
            }}
          >
            <Box
              sx={{
                width: 38,
                height: 38,
                display: "grid",
                placeItems: "center",
                borderRadius: 2.5,
                color: "common.white",
                background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                boxShadow: "0 7px 18px rgba(124, 58, 237, 0.25)",
              }}
            >
              <GraphicEqRoundedIcon />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: -0.5 }}>
              SoundRank
            </Typography>
          </Box>

          <Box
            component="nav"
            aria-label="Navigazione principale"
            sx={{
              display: "flex",
              gap: 0.5,
              overflowX: "auto",
              pb: { xs: 0.5, sm: 0 },
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {links.map((link) => (
              <Button
                size="small"
                key={link.path}
                component={NavLink}
                to={link.path}
                end={link.path === "/"}
                sx={{
                  flexShrink: 0,
                  px: 1.75,
                  py: 0.75,
                  borderRadius: 999,
                  color: "text.secondary",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    color: "text.primary",
                    bgcolor: "action.hover",
                  },
                  "&.active": {
                    color: "common.white",
                    background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                    boxShadow: "0 5px 14px rgba(124, 58, 237, 0.2)",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
            <IconButton
              aria-label={mode === "light" ? "Attiva tema scuro" : "Attiva tema chiaro"}
              onClick={toggleTheme}
              color="inherit"
              size="small"
            >
              {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
