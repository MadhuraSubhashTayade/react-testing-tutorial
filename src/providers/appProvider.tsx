import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { dark } from "@mui/material/styles/createPalette";
import React from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

type ProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
