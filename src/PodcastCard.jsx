import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

function PodcastCard({ podcast, rank }) {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
        overflow: "hidden",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={podcast.artworkUrl100}
          alt={`Copertina di ${podcast.name}`}
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
          title={podcast.name}
          sx={{
            fontWeight: 700,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {podcast.name}
        </Typography>

        <Typography color="text.secondary" noWrap>
          {podcast.artistName}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PodcastCard;
