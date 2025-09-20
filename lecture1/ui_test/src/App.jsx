import { Box, Container, Typography, Divider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import ButtonSection from './components/sections/ButtonSection';
import NavigationSection from './components/sections/NavigationSection';

/**
 * App 컴포넌트 - UI 테스트를 위한 메인 컴포넌트
 *
 * 16개의 UI 섹션을 순차적으로 추가할 수 있는 구조
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        width: '100%',
        minHeight: '100vh',
        bgcolor: 'background.default',
        py: { xs: 4, md: 6 }
      }}>
        <Container maxWidth="lg">
          {/* 헤더 섹션 */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2rem', md: '3rem' }
              }}
            >
              UI Components Test
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
            >
              Material-UI 컴포넌트 테스트 페이지
            </Typography>
          </Box>

          <Divider sx={{ mb: 6 }} />

          {/* 섹션 컨테이너 */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 6
          }}>
            {/* 섹션 1: Button 컴포넌트 */}
            <ButtonSection />

            {/* 섹션 2: Navigation 컴포넌트 */}
            <NavigationSection />

            {/* 추가 섹션들은 여기에 순차적으로 추가 */}

          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;