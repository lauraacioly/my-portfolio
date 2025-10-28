import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#d8a4b5',
    },
    secondary: {
      main: '#2f4858',
    },
  },
  typography: {
    fontFamily: "helvetica neue",
  },
});

theme = responsiveFontSizes(theme);

export default theme;