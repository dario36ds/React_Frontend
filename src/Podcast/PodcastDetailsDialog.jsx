import AppleIcon from "@mui/icons-material/Apple";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

function PodcastDetailsDialog({ podcast, rank, open, onClose }) {
  const details = [
    { label: "Ultimo aggiornamento", value: podcast.releaseDate },
    { label: "Disponibilità", value: podcast.price },
    { label: "Copyright", value: podcast.rights },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      slotProps={{ paper: { sx: { borderRadius: 4, overflow: "hidden", backgroundImage: "none" } } }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          gap: 3,
          alignItems: "center",
          p: { xs: 2.5, sm: 3 },
          pr: 7,
          background: (theme) =>
            "linear-gradient(135deg, " +
            theme.palette.secondary.main +
            "22, " +
            theme.palette.background.paper +
            " 65%)",
        }}
      >
        <Box
          component="img"
          src={podcast.artworkUrl100}
          alt={`Copertina di ${podcast.name}`}
          sx={{
            width: { xs: 96, sm: 140 },
            height: { xs: 96, sm: 140 },
            borderRadius: 3,
            objectFit: "cover",
            boxShadow: 5,
          }}
        />

        <Box sx={{ minWidth: 0, textAlign: "left" }}>
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <Chip label={`#${rank}`} color="secondary" size="small" />
            {podcast.genre && 
                <Chip label={podcast.genre} size="small" sx={{ mb: 1 }} />}
            
          </Stack>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 800, mb: 1 }}>
            {podcast.name}
          </Typography>
          <Typography color="text.secondary">{podcast.artistName}</Typography>
        </Box>

        <IconButton
          onClick={onClose}
          aria-label="Chiudi dettagli"
          sx={{ position: "absolute", top: 12, right: 12 }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ p: { xs: 2.5, sm: 3 } }}>
        {podcast.description && (
          <Typography sx={{ mb: 2.5, lineHeight: 1.7 }}>
            {podcast.description}
          </Typography>
        )}

        <Stack spacing={1}>
          {details.map(
            (detail) =>
              detail.value && (
                <Box
                  key={detail.label}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 2,
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: "action.hover",
                    textAlign: "left",
                  }}
                >
                  <Typography color="text.secondary">{detail.label}</Typography>
                  <Typography sx={{ fontWeight: 600 }}>{detail.value}</Typography>
                </Box>
              ),
          )}
        </Stack>
      </DialogContent>

      <DialogActions
        sx={{
          px: { xs: 2.5, sm: 3 },
          pb: 3,
          pt: 0,
          gap: 1,
          flexDirection: { xs: "column-reverse", sm: "row" },
          "& > :not(style)": { m: 0, width: { xs: "100%", sm: "auto" } },
        }}
      >
        <Button onClick={onClose} color="inherit" variant="outlined" startIcon={<CloseIcon />} sx={{ borderRadius: 999, px: 2.5, py: 1, borderColor: "divider" }}>
          Chiudi
        </Button>
        <Button
          component="a"
          href={podcast.appleUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          startIcon={<AppleIcon />}
          sx={{
            borderRadius: 999,
            px: 3,
            py: 1,
            color: "common.white",
            background: "linear-gradient(135deg, #fa2d55, #b5179e)",
            boxShadow: "0 8px 20px rgba(250, 45, 85, 0.28)",
            "&:hover": {
              background: "linear-gradient(135deg, #e91e4d, #941285)",
              boxShadow: "0 10px 26px rgba(250, 45, 85, 0.4)",
              transform: "translateY(-2px)",
            },
          }}
        >
          Vedi su Apple Podcasts
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PodcastDetailsDialog;
