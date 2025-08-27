import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container, Typography } from '@mui/material';
import theme from './theme';
import ButtonSection from './components/sections/ButtonSection';
import InputSection from './components/sections/InputSection';
import NavigationSection from './components/sections/NavigationSection';
import DropdownSection from './components/sections/DropdownSection';
import CheckboxSection from './components/sections/CheckboxSection';
import RadioSection from './components/sections/RadioSection';
import SliderSection from './components/sections/SliderSection';
import ModalSection from './components/sections/ModalSection';
import DragDropSection from './components/sections/DragDropSection';
import ScrollSection from './components/sections/ScrollSection';
import AnimationSection from './components/sections/AnimationSection';
import MenuSection from './components/sections/MenuSection';
import SidebarSection from './components/sections/SidebarSection';
import HoverSection from './components/sections/HoverSection';
import SwipeSection from './components/sections/SwipeSection';
import FlexboxNavSection from './components/sections/FlexboxNavSection';

/**
 * UI Test 프로젝트 메인 앱 컴포넌트
 * 16개 UI 섹션을 순차적으로 추가할 수 있는 구조
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        width: '100%', 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'flex-start',
        py: { xs: 2, md: 4 }
      }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 'bold',
              mb: 4
            }}
          >
            UI 테스트 프로젝트
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'text.secondary',
              mb: 6
            }}
          >
            16개 UI 요소를 순차적으로 추가할 예정입니다.
          </Typography>

          {/* UI 섹션들이 여기에 순차적으로 추가됩니다 */}
          <Box sx={{ mt: 4 }}>
            <ButtonSection />
            <InputSection />
            <NavigationSection />
            <DropdownSection />
            <CheckboxSection />
            <RadioSection />
            <SliderSection />
            <ModalSection />
            <DragDropSection />
            <ScrollSection />
            <AnimationSection />
            <MenuSection />
            <SidebarSection />
            <HoverSection />
            <SwipeSection />
            <FlexboxNavSection />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
