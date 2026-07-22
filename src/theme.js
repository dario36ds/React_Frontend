import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#7c3aed", dark: "#6d28d9" },
    secondary: { main: "#ec4899" },
    background: { default: "#faf9ff", paper: "#ffffff" },
    text: { primary: "#211a2e", secondary: "#6c6478" },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.055em" },
    h2: { fontWeight: 800, letterSpacing: "-0.035em" },
    h3: { fontWeight: 800, letterSpacing: "-0.035em" },
    button: { fontWeight: 700 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999, textTransform: "none" },
        contained: {
          background: "linear-gradient(135deg, #7c3aed, #ec4899)",
          boxShadow: "0 8px 20px rgba(124, 58, 237, 0.25)",
          "&:hover": {
            background: "linear-gradient(135deg, #6d28d9, #db2777)",
            boxShadow: "0 10px 24px rgba(124, 58, 237, 0.35)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { border: "1px solid #e9e4ef", boxShadow: "0 4px 16px rgba(48, 30, 68, 0.06)" },
      },
    },
    MuiTextField: {
      defaultProps: { size: "small" },
      styleOverrides: {
        root: { "& .MuiOutlinedInput-root": { borderRadius: 999, backgroundColor: "background.paper" } },
      },
    },
  },
});

export default theme;
