import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Space Mono", "monospace"].join(","),
    // Configure specific typography variants if needed
    h1: {
      fontFamily: "Space Mono, monospace",
    },
    h2: {
      fontFamily: "Space Mono, monospace",
    },
    h3: {
      fontFamily: "Space Mono, monospace",
    },
    body1: {
      fontFamily: "Space Mono, monospace",
    },
    body2: {
      fontFamily: "Space Mono, monospace",
    },
    button: {
      fontFamily: "Space Mono, monospace",
    },
  },
  palette: {
    text: {
      primary: "#626262",
    },
    primary: {
      main: "#626262",
    },
    headline: {
      main: "#464545",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: "#464545",
        },
      },
    },
  },
  globals: {
    backgroundColor: "#F6F5F4",
  },
});

export default theme;
