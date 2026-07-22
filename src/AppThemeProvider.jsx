import { useMemo, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import createAppTheme from "./theme.js";
import ThemeContext from "./ThemeContext.js";

export function AppThemeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const toggleTheme = () => setMode((currentMode) => (currentMode === "light" ? "dark" : "light"));
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
