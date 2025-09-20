import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1ED760',
      light: '#1FDF64',
      dark: '#1DB954',
      contrastText: '#000000',
    },
    secondary: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#B3B3B3',
      contrastText: '#000000',
    },
    background: {
      default: '#000000',
      paper: '#121212',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3',
      disabled: '#6A6A6A',
    },
    divider: '#282828',
    error: {
      main: '#E22134',
    },
    warning: {
      main: '#FFA816',
    },
    info: {
      main: '#509BF5',
    },
    success: {
      main: '#1ED760',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", system-ui, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#FFFFFF',
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2.4rem',
      fontWeight: 600,
      color: '#FFFFFF',
      '@media (max-width:768px)': {
        fontSize: '1.5rem',
      },
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 600,
      color: '#FFFFFF',
      '@media (max-width:768px)': {
        fontSize: '1.2rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#FFFFFF',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#FFFFFF',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#FFFFFF',
    },
    body1: {
      fontSize: '1rem',
      color: '#B3B3B3',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#B3B3B3',
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '500px',
          padding: '12px 32px',
          fontWeight: 700,
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'scale(1.04)',
          },
        },
        containedPrimary: {
          backgroundColor: '#1ED760',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#1DB954',
          },
        },
        outlinedPrimary: {
          borderColor: '#FFFFFF',
          color: '#FFFFFF',
          '&:hover': {
            borderColor: '#1ED760',
            color: '#1ED760',
            backgroundColor: 'transparent',
          },
        },
        textPrimary: {
          color: '#B3B3B3',
          '&:hover': {
            color: '#1ED760',
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212',
          borderRadius: 8,
          transition: 'background-color 0.2s ease',
          '&:hover': {
            backgroundColor: '#181818',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212',
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.5)',
        },
        elevation2: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
          backgroundImage: 'none',
          borderBottom: '1px solid #282828',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          textDecoration: 'none',
          transition: 'color 0.2s ease',
          '&:hover': {
            color: '#1ED760',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#333333',
            },
            '&:hover fieldset': {
              borderColor: '#B3B3B3',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1ED760',
            },
          },
          '& .MuiInputBase-input': {
            color: '#FFFFFF',
          },
          '& .MuiInputLabel-root': {
            color: '#B3B3B3',
          },
        },
      },
    },
  },
});

export default theme;