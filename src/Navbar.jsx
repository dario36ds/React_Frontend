import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router";

const links = [
  { label: "Home", path: "/" },
  { label: "Canzoni", path: "/classifica-canzoni" },
  { label: "Album", path: "/classifica-album" },
  { label: "Podcast", path: "/classifica-podcast" },
  { label: "Ricerca", path: "/ricerca" }
];

function Navbar() {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: "1px solid", borderColor: "divider" }} >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1, gap: 2, flexWrap: "wrap" }}>
          <Typography
            component={NavLink}
            to="/"
            variant="h6"
            fontWeight={700}
            color="primary"
            sx={{ mr: { sm: 3 } }}>
            SoundRank
          </Typography>
          <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
            {links.map((link) => (
              <Button
                size="small"
                key={link.path}
                component={NavLink}
                to={link.path}
                end={link.path === "/"}
                sx={{
                  color: "text.secondary",
                  "&.active": {
                    color: "primary.main",
                    bgcolor: "action.hover",}
                    }} >
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
