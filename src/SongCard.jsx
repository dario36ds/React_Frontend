import { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import SongDetailsDialog from "./SongDetailsDialog";

function SongCard({ song, rank }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      <Card
        sx={{
          height: "100%",
          borderRadius: 3,
          position: "relative",
          overflow: "hidden",
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: 6,
          },
        }}
      >
        <CardActionArea
          onClick={() => setDetailsOpen(true)}
          aria-label={`Mostra i dettagli di ${song.name}`}
          sx={{ height: "100%" }}
        >
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              image={song.artworkUrl100}
              alt={`Copertina di ${song.name}`}
              sx={{ aspectRatio: "1 / 1", objectFit: "cover" }}
            />

            <Chip
              label={`#${rank}`}
              color="secondary"
              size="small"
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                fontWeight: 700,
              }}
            />
          </Box>

          <CardContent sx={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              component="h2"
              title={song.name}
              sx={{
                fontWeight: 700,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {song.name}
            </Typography>

            <Typography color="text.secondary" noWrap>
              {song.artistName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <SongDetailsDialog
        song={song}
        rank={rank}
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
      />
    </>
  );
}

export default SongCard;
