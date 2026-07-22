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

function formatDate(date) {
  if (!date) return null;

  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function Detail({ label, value }) {
  if (value === undefined || value === null || value === "") return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        p: 1.5,
        borderRadius: 2,
        bgcolor: "action.hover",
      }}
    >
      <Typography color="text.secondary" variant="body2">
        {label}
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 600, textAlign: "right" }}>
        {value}
      </Typography>
    </Box>
  );
}

function SearchDetailsDialog({ result, open, onClose }) {
  if (!result) return null;

  const title = result.trackCensoredName || result.trackName || result.collectionCensoredName || result.collectionName || result.artistName;
  const album = result.collectionCensoredName || result.collectionName;
  const details = [
    { label: "Artista", value: result.artistName },
    { label: "Album", value: album },
    { label: "Genere", value: result.primaryGenreName },
    { label: "Data di uscita", value: formatDate(result.releaseDate) },
    { label: "Numero di dischi", value: result.discCount },
    { label: "Brani nell'album", value: result.trackCount },
    { label: "Disco", value: result.discNumber },
    { label: "Traccia", value: result.trackNumber },
    { label: "Paese", value: result.country },
    { label: "Contenuto esplicito", value: result.trackExplicitness === "explicit" ? "Sì" : result.trackExplicitness === "notExplicit" ? "No" : null },
  ];

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: { xs: 2.5, sm: 3 },
          pr: 7,
          background: "linear-gradient(135deg, #ede9fe, #ffffff 65%)",
        }}
      >
        {result.artworkUrl100 && (
          <Box
            component="img"
            src={result.artworkUrl100.replace("100x100bb", "300x300bb")}
            alt={`Copertina di ${title}`}
            sx={{ width: { xs: 88, sm: 120 }, height: { xs: 88, sm: 120 }, objectFit: "cover", borderRadius: 2, flexShrink: 0 }}
          />
        )}
        <Box sx={{ minWidth: 0 }}>
          {result.primaryGenreName && <Chip label={result.primaryGenreName} size="small" sx={{ mb: 1 }} />}
          <Typography variant="h5" component="h2" sx={{ fontWeight: 800, lineHeight: 1.15 }}>
            {title}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 0.75 }}>
            {result.artistName}
          </Typography>
        </Box>
        <IconButton onClick={onClose} aria-label="Chiudi dettagli" sx={{ position: "absolute", top: 12, right: 12 }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ p: { xs: 2.5, sm: 3 } }}>
        {result.previewUrl && (
          <Box sx={{ mb: 2.5 }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>Anteprima</Typography>
            <Box component="audio" controls src={result.previewUrl} sx={{ width: "100%" }}>
              Il tuo browser non supporta l'anteprima audio.
            </Box>
          </Box>
        )}
        <Stack spacing={1.25}>
          {details.map((detail) => <Detail key={detail.label} {...detail} />)}
        </Stack>
      </DialogContent>

      <DialogActions sx={{ px: { xs: 2.5, sm: 3 }, pb: 3, pt: 0, gap: 1, flexWrap: "wrap" }}>
        <Button onClick={onClose} color="inherit">Chiudi</Button>
        {result.artistViewUrl && <Button component="a" href={result.artistViewUrl} target="_blank" rel="noopener noreferrer">Artista</Button>}
        {result.collectionViewUrl && <Button component="a" href={result.collectionViewUrl} target="_blank" rel="noopener noreferrer">Album</Button>}
        {result.trackViewUrl && <Button component="a" href={result.trackViewUrl} target="_blank" rel="noopener noreferrer" variant="contained" startIcon={<AppleIcon />}>Apri brano</Button>}
      </DialogActions>
    </Dialog>
  );
}

export default SearchDetailsDialog;
