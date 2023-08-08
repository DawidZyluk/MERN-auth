import { createTheme } from "@mui/material";

const tokens = {
  primary: {
    100: "#cce4f0",
    200: "#99c9e2",
    300: "#66add3",
    400: "#3392c5",
    500: "#0077b6",
    600: "#005f92",
    700: "#00476d",
    800: "#003049",
    900: "#001824"
},
}

export const themeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
    },
    secondary: {
      main: '#f50057',
    },
  },
});