import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import AppleIcon from "@mui/icons-material/Apple";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CloseIcon from "@mui/icons-material/Close";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
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

function Detail({ icon, label, value }) {
  if (!value) return null;

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        p: 2,
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        bgcolor: "action.hover",
      }}
    >
      <Box sx={{ color: "secondary.main", display: "flex", pt: 0.25 }}>
        {icon}
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Typography variant="caption" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

function SongDetailsDialog({ song, rank, open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      slotProps={{
        paper: {
          sx: { borderRadius: 4, overflow: "hidden", backgroundImage: "none" },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: 3,
          p: { xs: 2.5, sm: 3 },
          pr: { xs: 6, sm: 7 },
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
          src={song.artworkUrl100}
          alt={`Copertina di ${song.name}`}
          sx={{
            width: { xs: 96, sm: 140 },
            height: { xs: 96, sm: 140 },
            borderRadius: 3,
            objectFit: "cover",
            boxShadow: 5,
            flexShrink: 0,
          }}
        />

        <Box sx={{ minWidth: 0, textAlign: "left" }}>
          <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: "wrap" }}>
            <Chip label={`#${rank}`} color="secondary" size="small" />
            {song.genre && <Chip label={song.genre} size="small" variant="outlined" />}
          </Stack>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: 800, lineHeight: 1.15, mb: 1 }}
          >
            {song.name}
          </Typography>
          <Typography color="text.secondary">{song.artistName}</Typography>
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
        <Stack spacing={1.5}>
          <Detail
            icon={<AlbumOutlinedIcon fontSize="small" />}
            label="Album"
            value={song.albumName}
          />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 1.5,
            }}
          >
            <Detail
              icon={<CalendarMonthOutlinedIcon fontSize="small" />}
              label="Data di uscita"
              value={song.releaseDate}
            />
            <Detail
              icon={<PaymentsOutlinedIcon fontSize="small" />}
              label="Prezzo"
              value={song.price}
            />
          </Box>
          <Detail
            icon={<AlbumOutlinedIcon fontSize="small" />}
            label="Etichetta discografica e diritti"
            value={song.recordLabel}
          />
        </Stack>
      </DialogContent>

      <DialogActions
        sx={{
          px: { xs: 2.5, sm: 3 },
          pb: 3,
          pt: 0,
          gap: 1,
          flexDirection: { xs: "column-reverse", sm: "row" },
          "& > :not(style)": {
            m: 0,
            width: { xs: "100%", sm: "auto" },
          },
        }}
      >
        <Button
          onClick={onClose}
          color="inherit"
          variant="outlined"
          startIcon={<CloseIcon />}
          sx={{ borderRadius: 999, px: 2.5, py: 1, borderColor: "divider" }}
        >
          Chiudi
        </Button>
        <Button
          component="a"
          href={song.appleUrl}
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
              transform: "translateY(-2px)",
            },
          }}
        >
          Vedi su Apple Music
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SongDetailsDialog;
