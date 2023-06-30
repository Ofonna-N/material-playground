import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createContext, useMemo, useState } from "react";

const ThemeModeProv = createContext();

const AppThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const themeCtx = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const themeModeCtx = {
    mode,
    toggleMode: () => {
      setMode((prev) => (prev === "light" ? "dark" : "light"));
    },
  };

  return (
    <ThemeModeProv.Provider value={themeModeCtx}>
      <ThemeProvider theme={themeCtx}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeProv.Provider>
  );
};

export { ThemeModeProv as modeCtx };

export default AppThemeProvider;
