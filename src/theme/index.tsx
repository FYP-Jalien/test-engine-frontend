import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1B7D73",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#858383",
      dark: "#3A3A3A",
      contrastText: "#D5E3E1",
    },
    background: {
      default: "#F5F5F9",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1B7D73",
          color: "#ffffff",
        },
      },
    },
  },
  typography: {
    fontFamily: ["sans-serif", "Orbitron"].join(","),
  },
});
