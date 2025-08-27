import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button,
  Menu,
  MenuItem,
  Grid,
  Paper,
  Chip,
  Divider,
  Alert
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/**
 * Menu 섹션 컴포넌트
 * 
 * MUI Menu 컴포넌트 사용
 * - 버튼 클릭으로 메뉴 열기/닫기
 * - MenuItem 3-4개
 * - 메뉴 아이템 클릭 시 알림
 */
function MenuSection() {
  const [anchorEls, setAnchorEls] = useState({});
  const [lastAction, setLastAction] = useState('');

  // 메뉴 설정 데이터
  const menuConfigs = [
    {
      id: 'basic',
      title: '📋 기본 메뉴',
      buttonLabel: '기본 메뉴',
      icon: <MenuIcon />,
      color: 'primary',
      items: [
        { id: 'home', label: '🏠 홈', description: '메인 페이지로 이동' },
        { id: 'about', label: 'ℹ️ 소개', description: '회사 소개 페이지' },
        { id: 'contact', label: '📞 연락처', description: '연락처 정보' },
        { id: 'help', label: '❓ 도움말', description: '사용법 안내' }
      ]
    },
    {
      id: 'user',
      title: '👤 사용자 메뉴',
      buttonLabel: '사용자 계정',
      icon: <AccountCircleIcon />,
      color: 'secondary',
      items: [
        { id: 'profile', label: '👤 프로필', description: '사용자 정보 수정' },
        { id: 'settings', label: '⚙️ 설정', description: '계정 설정' },
        { id: 'logout', label: '🚪 로그아웃', description: '계정에서 로그아웃' }
      ]
    },
    {
      id: 'actions',
      title: '⚡ 액션 메뉴',
      buttonLabel: '더 많은 옵션',
      icon: <MoreVertIcon />,
      color: 'success',
      items: [
        { id: 'edit', label: '✏️ 편집', description: '내용 수정' },
        { id: 'share', label: '📤 공유', description: '다른 사용자와 공유' },
        { id: 'copy', label: '📋 복사', description: '클립보드에 복사' },
        { id: 'delete', label: '🗑️ 삭제', description: '항목 삭제' }
      ]
    },
    {
      id: 'dropdown',
      title: '🔽 드롭다운 메뉴',
      buttonLabel: '카테고리 선택',
      icon: <KeyboardArrowDownIcon />,
      color: 'warning',
      items: [
        { id: 'tech', label: '💻 기술', description: '기술 관련 콘텐츠' },
        { id: 'design', label: '🎨 디자인', description: '디자인 관련 콘텐츠' },
        { id: 'business', label: '💼 비즈니스', description: '비즈니스 관련 콘텐츠' }
      ]
    }
  ];

  // 메뉴 열기
  const handleMenuOpen = (menuId, event) => {
    setAnchorEls(prev => ({
      ...prev,
      [menuId]: event.currentTarget
    }));
    setLastAction(`${menuId} 메뉴 열기`);
  };

  // 메뉴 닫기
  const handleMenuClose = (menuId) => {
    setAnchorEls(prev => ({
      ...prev,
      [menuId]: null
    }));
  };

  // 메뉴 아이템 클릭
  const handleMenuItemClick = (menuId, item) => {
    alert(`"${item.label}" 메뉴가 선택되었습니다!\n\n설명: ${item.description}`);
    setLastAction(`${item.label} 선택됨`);
    handleMenuClose(menuId);
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
        Menu 섹션
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 4
        }}
      >
        MUI Menu 컴포넌트를 사용한 다양한 컨텍스트 메뉴
      </Typography>

      {/* 마지막 액션 표시 */}
      {lastAction && (
        <Alert severity="info" sx={{ mb: 3 }}>
          마지막 액션: {lastAction}
        </Alert>
      )}

      {/* 메뉴 버튼들 */}
      <Grid container spacing={3}>
        {menuConfigs.map((config) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={config.id}>
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
                  fontSize: '1rem',
                  fontWeight: 'bold'
                }}
              >
                {config.title}
              </Typography>
              
              <Button
                variant="contained"
                color={config.color}
                startIcon={config.icon}
                onClick={(e) => handleMenuOpen(config.id, e)}
                sx={{ mt: 'auto' }}
              >
                {config.buttonLabel}
              </Button>

              {/* 메뉴 상태 표시 */}
              <Box sx={{ mt: 2 }}>
                <Chip 
                  label={anchorEls[config.id] ? "메뉴 열림" : "메뉴 닫힘"}
                  color={anchorEls[config.id] ? config.color : "default"}
                  size="small"
                />
              </Box>

              {/* 메뉴 컴포넌트 */}
              <Menu
                anchorEl={anchorEls[config.id]}
                open={Boolean(anchorEls[config.id])}
                onClose={() => handleMenuClose(config.id)}
                PaperProps={{
                  elevation: 8,
                  sx: {
                    minWidth: 200,
                    mt: 1
                  }
                }}
              >
                {config.items.map((item, index) => [
                  <MenuItem 
                    key={item.id}
                    onClick={() => handleMenuItemClick(config.id, item)}
                    sx={{
                      py: 1.5,
                      px: 2,
                      '&:hover': {
                        bgcolor: `${config.color}.light`,
                        color: `${config.color}.contrastText`
                      }
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        {item.label}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  </MenuItem>,
                  // 마지막 아이템이 아니면 Divider 추가
                  index < config.items.length - 1 && (
                    <Divider key={`divider-${item.id}`} />
                  )
                ]).flat().filter(Boolean)}
              </Menu>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* 현재 열린 메뉴 표시 */}
      <Paper elevation={1} sx={{ mt: 4, p: 3, bgcolor: 'primary.light' }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'primary.contrastText' }}>
          📊 메뉴 상태
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
          {Object.entries(anchorEls)
            .filter(([_, anchorEl]) => Boolean(anchorEl))
            .map(([menuId]) => {
              const config = menuConfigs.find(c => c.id === menuId);
              return (
                <Chip 
                  key={menuId}
                  label={`${config.title} 열림`}
                  color={config.color}
                  size="small"
                />
              );
            })
          }
          {Object.values(anchorEls).every(v => !v) && (
            <Typography variant="body2" sx={{ color: 'primary.contrastText', opacity: 0.8 }}>
              현재 열린 메뉴가 없습니다
            </Typography>
          )}
        </Box>
      </Paper>

      {/* 기능 설명 */}
      <Box sx={{ mt: 4, p: 3, bgcolor: 'success.light', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="success.dark">
          📋 Menu 컴포넌트 특징
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>앵커 엘리먼트</strong>: 버튼을 기준으로 메뉴 위치 자동 조정
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>자동 배치</strong>: 화면 경계에서 자동으로 위치 조정
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>키보드 접근성</strong>: ESC 키로 닫기, 화살표 키로 탐색
        </Typography>
        <Typography variant="body2">
          • <strong>외부 클릭</strong>: 메뉴 외부 클릭 시 자동 닫기
        </Typography>
      </Box>
    </Box>
  );
}

export default MenuSection;