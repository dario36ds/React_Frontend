import { Box, Typography } from "@mui/material";

function PageTitle({ title, subtitle }) {
  return (
    <Box sx={{ mb: 4, textAlign: "left", position: "relative", pl: 2.5 }}>
      <Box
        sx={{
          position: "absolute",
          inset: "4px auto 4px 0",
          width: 5,
          borderRadius: 999,
          background: "linear-gradient(180deg, #7c3aed, #ec4899)",
        }}
      />
      <Typography
        variant="h3"
        component="h1"
        sx={{ mb: 0.75, fontWeight: 800, letterSpacing: -1 }}
      >
        {title}
      </Typography>

      <Typography color="text.secondary">
        {subtitle}
      </Typography>
    </Box>
  );
}

export default PageTitle;
