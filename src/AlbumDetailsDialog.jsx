import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

function Detail({ label, value }) {
  if (!value) return null;

  return (
    <div>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
      <Typography>{value}</Typography>
    </div>
  );
}

function AlbumDetailsDialog({ album, open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{album.name}</DialogTitle>

      <DialogContent>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {album.artistName}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Stack spacing={2}>
          <Detail label="Genere" value={album.genre} />
          <Detail label="Data di uscita" value={album.releaseDate} />
          <Detail label="Prezzo su Apple Music" value={album.price} />
          <Detail label="Etichetta discografica" value={album.recordLabel} />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Chiudi
        </Button>
        <Button
          component="a"
          href={album.appleUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
        >
          Vedi su Apple Music
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AlbumDetailsDialog;
