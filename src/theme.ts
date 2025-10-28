import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#2f4858',
    },
    secondary: {
      main: '#ffc0be',
    },
  },
  typography: {
    fontFamily: "helvetica neue",
  },
});

theme = responsiveFontSizes(theme);

export default theme;