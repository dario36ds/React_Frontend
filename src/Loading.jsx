import { Box, CircularProgress, Typography } from "@mui/material";

function Loading() {
  return (
    <Box
      sx={{
        py: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <CircularProgress />
      <Typography color="text.secondary">
        Caricamento della classifica...
      </Typography>
    </Box>
  );
}

export default Loading;
