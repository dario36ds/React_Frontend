import { Box, Typography } from "@mui/material";

function PageTitle({ title, subtitle }) {
  return (
    <Box sx={{ mb: 4, textAlign: "left" }}>
      <Typography variant="h3" component="h1" sx={{ mb: 1, fontWeight: 700 }}>
        {title}
      </Typography>

      <Typography color="text.secondary">
        {subtitle}
      </Typography>
    </Box>
  );
}

export default PageTitle;
