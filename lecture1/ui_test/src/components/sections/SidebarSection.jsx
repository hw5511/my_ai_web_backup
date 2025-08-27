import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
  Paper,
  Chip,
  Divider,
  Alert,
  IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';

/**
 * Sidebar 섹션 컴포넌트
 * 
 * MUI Drawer 컴포넌트 사용
 * - 토글 버튼으로 열기/닫기
 * - List와 ListItem으로 메뉴 구성
 * - 사이드바 메뉴 클릭 기능
 */
function SidebarSection() {
  const [sidebarStates, setSidebarStates] = useState({});
  const [lastAction, setLastAction] = useState('');

  // 사이드바 설정 데이터
  const sidebarConfigs = [
    {
      id: 'left',
      title: '⬅️ 좌측 사이드바',
      buttonLabel: '좌측 사이드바 열기',
      anchor: 'left',
      color: 'primary',
      items: [
        { id: 'home', label: '홈', icon: <HomeIcon />, description: '메인 페이지' },
        { id: 'profile', label: '프로필', icon: <PersonIcon />, description: '사용자 정보' },
        { id: 'settings', label: '설정', icon: <SettingsIcon />, description: '앱 설정' },
        { id: 'about', label: '소개', icon: <InfoIcon />, description: '앱 정보' }
      ]
    },
    {
      id: 'right',
      title: '➡️ 우측 사이드바',
      buttonLabel: '우측 사이드바 열기',
      anchor: 'right',
      color: 'secondary',
      items: [
        { id: 'notifications', label: '알림', icon: <NotificationsIcon />, description: '새 알림' },
        { id: 'favorites', label: '즐겨찾기', icon: <FavoriteIcon />, description: '좋아요 항목' },
        { id: 'cart', label: '장바구니', icon: <ShoppingCartIcon />, description: '구매 목록' },
        { id: 'contact', label: '연락처', icon: <ContactMailIcon />, description: '고객 지원' }
      ]
    }
  ];

  // 사이드바 열기
  const handleSidebarOpen = (sidebarId) => {
    setSidebarStates(prev => ({
      ...prev,
      [sidebarId]: true
    }));
    setLastAction(`${sidebarId} 사이드바 열기`);
  };

  // 사이드바 닫기
  const handleSidebarClose = (sidebarId) => {
    setSidebarStates(prev => ({
      ...prev,
      [sidebarId]: false
    }));
    setLastAction(`${sidebarId} 사이드바 닫기`);
  };

  // 사이드바 메뉴 아이템 클릭
  const handleMenuItemClick = (sidebarId, item) => {
    alert(`"${item.label}" 메뉴가 선택되었습니다!\n\n설명: ${item.description}`);
    setLastAction(`${item.label} 메뉴 선택`);
    handleSidebarClose(sidebarId);
  };

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
        Sidebar 섹션
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 4
        }}
      >
        MUI Drawer 컴포넌트를 사용한 좌측/우측 사이드바 내비게이션
      </Typography>

      {/* 마지막 액션 표시 */}
      {lastAction && (
        <Alert severity="info" sx={{ mb: 3 }}>
          마지막 액션: {lastAction}
        </Alert>
      )}

      {/* 사이드바 버튼들 */}
      <Grid container spacing={3}>
        {sidebarConfigs.map((config) => (
          <Grid size={{ xs: 12, md: 6 }} key={config.id}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center'
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2,
                  fontWeight: 'bold'
                }}
              >
                {config.title}
              </Typography>
              
              <Typography variant="body2" color="text.secondary" paragraph>
                {config.anchor === 'left' ? '왼쪽' : '오른쪽'}에서 슬라이드하는 사이드바
              </Typography>

              <Button
                variant="contained"
                color={config.color}
                startIcon={<MenuIcon />}
                onClick={() => handleSidebarOpen(config.id)}
                sx={{ mt: 'auto' }}
              >
                {config.buttonLabel}
              </Button>

              {/* 사이드바 상태 표시 */}
              <Box sx={{ mt: 2 }}>
                <Chip 
                  label={sidebarStates[config.id] ? "사이드바 열림" : "사이드바 닫힘"}
                  color={sidebarStates[config.id] ? config.color : "default"}
                  size="small"
                />
              </Box>

              {/* Drawer 컴포넌트 */}
              <Drawer
                anchor={config.anchor}
                open={sidebarStates[config.id] || false}
                onClose={() => handleSidebarClose(config.id)}
                PaperProps={{
                  sx: {
                    width: 280,
                    bgcolor: 'background.default'
                  }
                }}
              >
                {/* 사이드바 헤더 */}
                <Box sx={{ 
                  p: 2, 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  bgcolor: `${config.color}.main`,
                  color: `${config.color}.contrastText`
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {config.title}
                  </Typography>
                  <IconButton 
                    onClick={() => handleSidebarClose(config.id)}
                    sx={{ color: 'inherit' }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>

                <Divider />

                {/* 사이드바 메뉴 리스트 */}
                <List>
                  {config.items.map((item) => (
                    <ListItem key={item.id} disablePadding>
                      <ListItemButton
                        onClick={() => handleMenuItemClick(config.id, item)}
                        sx={{
                          py: 1.5,
                          '&:hover': {
                            bgcolor: `${config.color}.light`,
                            color: `${config.color}.contrastText`
                          }
                        }}
                      >
                        <ListItemIcon sx={{ color: 'inherit' }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText 
                          primary={item.label}
                          secondary={item.description}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>

                <Divider />

                {/* 사이드바 푸터 */}
                <Box sx={{ p: 2, mt: 'auto', textAlign: 'center' }}>
                  <Typography variant="caption" color="text.secondary">
                    {config.anchor === 'left' ? '⬅️' : '➡️'} {config.anchor.toUpperCase()} 사이드바
                  </Typography>
                </Box>
              </Drawer>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* 사이드바 상태 요약 */}
      <Paper elevation={1} sx={{ mt: 4, p: 3, bgcolor: 'warning.light' }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'warning.dark' }}>
          📊 사이드바 상태
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom>
              좌측 사이드바:
            </Typography>
            <Chip 
              label={sidebarStates.left ? "열림" : "닫힘"}
              color={sidebarStates.left ? "primary" : "default"}
              size="small"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom>
              우측 사이드바:
            </Typography>
            <Chip 
              label={sidebarStates.right ? "열림" : "닫힘"}
              color={sidebarStates.right ? "secondary" : "default"}
              size="small"
            />
          </Grid>
        </Grid>
      </Paper>

      {/* 기능 설명 */}
      <Box sx={{ mt: 4, p: 3, bgcolor: 'info.light', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="info.dark">
          📱 Sidebar 특징
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>양방향 슬라이드</strong>: 좌측/우측에서 부드럽게 슬라이드
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>오버레이</strong>: 배경을 어둡게 하여 포커스 집중
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>접근성</strong>: ESC 키, 배경 클릭, X 버튼으로 닫기
        </Typography>
        <Typography variant="body2">
          • <strong>반응형</strong>: 모바일에서 전체 폭 사용, 데스크톱에서 280px 고정
        </Typography>
      </Box>
    </Box>
  );
}

export default SidebarSection;