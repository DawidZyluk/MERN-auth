import { createTheme } from "@mui/material";

const tokens = {
  primary: {
    100: "#cfe8f0",
    200: "#a0d0e0",
    300: "#70b9d1",
    400: "#41a1c1",
    500: "#118ab2",
    600: "#0e6e8e",
    700: "#0a536b",
    800: "#073747",
    900: "#031c24"
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