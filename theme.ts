import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4CAF50",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#8BC34A",
      contrastText: "#000000",
    },
    background: {
      default: "#FAF9F6",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2E3B27",
      secondary: "#557A44",
    },
    success: {
      main: "#388E3C",
    },
    warning: {
      main: "#FBC02D",
    },
    error: {
      main: "#D32F2F",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontWeight: 700, fontSize: "3rem", color: "#33691E" },
    h2: { fontWeight: 600, fontSize: "2.25rem", color: "#558B2F" },
    body1: { fontSize: "1rem", color: "#2E3B27" },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 8 } } },
    MuiAppBar: { styleOverrides: { root: { backgroundColor: "#4CAF50" } } },
  },
});

export default theme;
