import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F7D52A', // 바나나 옐로우
      light: '#FFF176',
      dark: '#F57F17',
    },
    secondary: {
      main: '#8B4513', // 브라운
      light: '#A67C52',
      dark: '#654321',
    },
    success: {
      main: '#4CAF50', // 액센트 그린
      dark: '#388E3C',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFF8DC', // 세컨더리 배경
    },
    text: {
      primary: '#8B4513', // 브라운 텍스트
      secondary: '#A67C52', // 뮤트 텍스트
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: { xs: '2rem', md: '3rem' },
      fontWeight: 600,
      color: '#8B4513',
    },
    h2: {
      fontSize: { xs: '1.5rem', md: '2.25rem' },
      fontWeight: 500,
      color: '#8B4513',
    },
    h3: {
      fontSize: { xs: '1.25rem', md: '1.75rem' },
      fontWeight: 500,
      color: '#8B4513',
    },
    body1: {
      fontSize: { xs: '1rem', md: '1.125rem' },
      lineHeight: 1.6,
      color: '#8B4513',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#4CAF50',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#388E3C',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFF8DC',
          border: '1px solid #E8E8E8',
        },
      },
    },
  },
  spacing: 8,
});

export default theme;