import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: '#333',
          color: '#fff', // Set text color to white for input fields
        },
        input: {
          color: '#fff', // Set text color to white for input text
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#fff', // Set text color to white for input labels
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#fff', // Set text color to white for typography components
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff', // Set text color to white for buttons
        },
      },
    },
    // Add overrides for other components as needed
  },
});

export default darkTheme;
