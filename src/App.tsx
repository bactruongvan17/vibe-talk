import { RouterProvider } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import router from "./Routes";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    typography: Palette["primary"];
  }

  interface PaletteOptions {
    typography: PaletteOptions["primary"];
  }
}

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1dab48",
      },
      typography: {
        main: "#000000",
        light: "#ffffff",
        dark: "#858585",
        contrastText: "#858585",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
