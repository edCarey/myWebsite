import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
        primary: '#626262',
      },
    primary: {
      main: '#626262',
    },
    headline: {
        main: '#464545',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: '#464545',
        },
      },
    },
  },
  globals: {
    backgroundColor: '#F6F5F4',
  },
});

export default theme;
