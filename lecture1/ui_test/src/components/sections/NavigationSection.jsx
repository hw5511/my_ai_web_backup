import { useState } from 'react';
import { 
  Box, 
  Typography, 
  AppBar, 
  Toolbar, 
  Button, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

/**
 * Navigation 섹션 컴포넌트
 * 
 * MUI AppBar와 Toolbar를 사용한 내비게이션 바
 * - 홈, 소개, 서비스, 연락처 메뉴
 * - 클릭 시 메뉴명 알림
 * - 모바일 반응형 햄버거 메뉴
 */
function NavigationSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { name: '홈', id: 'home' },
    { name: '소개', id: 'about' },
    { name: '서비스', id: 'services' },
    { name: '연락처', id: 'contact' }
  ];

  const handleMenuClick = (menuName) => {
    alert(`${menuName} 메뉴가 클릭되었습니다!`);
    setMobileOpen(false); // 모바일에서 메뉴 클릭 시 드로어 닫기
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // 모바일 드로어 내용
  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          p: 2,
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <Typography variant="h6" color="primary">
          메뉴
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.id}
            onClick={() => handleMenuClick(item.name)}
            sx={{ 
              cursor: 'pointer',
              '&:hover': {
                bgcolor: 'primary.light',
                color: 'primary.contrastText'
              }
            }}
          >
            <ListItemText 
              primary={item.name}
              sx={{ textAlign: 'center' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ mb: 6 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom
        sx={{
          textAlign: 'center',
          fontSize: { xs: '1.5rem', md: '2rem' },
          fontWeight: 'bold',
          mb: 3
        }}
      >
        Navigation 섹션
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 4
        }}
      >
        MUI AppBar와 Toolbar를 사용한 반응형 내비게이션 바
      </Typography>

      {/* Navigation Bar 미리보기 */}
      <Box sx={{ flexGrow: 1, mb: 3 }}>
        <AppBar position="static" elevation={2}>
          <Toolbar>
            {/* 로고/브랜드명 */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Website
            </Typography>
            
            {/* 데스크톱 메뉴 */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.id}
                    color="inherit"
                    onClick={() => handleMenuClick(item.name)}
                    sx={{
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}
            
            {/* 모바일 햄버거 메뉴 버튼 */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>

        {/* 모바일 드로어 */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // 성능 향상을 위해
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 250 
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* 설명 */}
      <Box sx={{ mt: 3, p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary">
          기능 설명
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>데스크톱</strong>: 상단에 메뉴 버튼들이 가로로 배치
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>모바일</strong>: 햄버거 메뉴 버튼으로 변경, 클릭 시 우측에서 드로어 슬라이드
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>상호작용</strong>: 모든 메뉴 클릭 시 알림창으로 메뉴명 표시
        </Typography>
        <Typography variant="body2">
          • <strong>반응형</strong>: 화면 크기에 따라 자동으로 레이아웃 변경
        </Typography>
      </Box>
    </Box>
  );
}

export default NavigationSection;