import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#b0a8b9',
    },
    secondary: {
      main: '#4f415f',
    },

    background: {
      default: '#29272bff',
    },

  },
  typography: {
    fontFamily: "helvetica neue",
  },
});

theme = responsiveFontSizes(theme);

export default theme;