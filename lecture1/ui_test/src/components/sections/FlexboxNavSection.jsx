import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper
} from '@mui/material';

/**
 * Flexbox Navigation 섹션 컴포넌트
 * 
 * CSS Flexbox를 사용한 네비게이션 바 구현
 * - 큰 네비게이션 박스 (가로 전체, 높이 60px, 배경색 #2d3748)
 * - 로고와 메뉴를 양 끝 정렬
 * - 호버 효과 적용
 */
function FlexboxNavSection() {
  const [hoveredMenu, setHoveredMenu] = useState('');

  const menuItems = ['홈', '소개', '상품', '연락처', '설정'];

  const handleMenuClick = (menu) => {
    alert(`"${menu}" 메뉴가 클릭되었습니다!`);
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
        Flexbox Navigation 섹션
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 4
        }}
      >
        CSS Flexbox를 활용한 모던한 네비게이션 바 구현
      </Typography>

      {/* Flexbox Navigation Bar */}
      <Paper elevation={3} sx={{ mb: 4, overflow: 'hidden', borderRadius: 2 }}>
        <Box
          sx={{
            width: '100%',
            height: '60px',
            backgroundColor: '#2d3748',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 3
          }}
        >
          {/* 로고 박스 (왼쪽) */}
          <Box
            sx={{
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
            onClick={() => handleMenuClick('로고')}
          >
            <Typography
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '20px',
                fontFamily: 'Arial, sans-serif'
              }}
            >
              MyWebsite
            </Typography>
          </Box>

          {/* 메뉴들 박스 (오른쪽) */}
          <Box
            sx={{
              display: 'flex',
              gap: '15px',
              alignItems: 'center'
            }}
          >
            {menuItems.map((menu, index) => (
              <Box
                key={menu}
                onMouseEnter={() => setHoveredMenu(menu)}
                onMouseLeave={() => setHoveredMenu('')}
                onClick={() => handleMenuClick(menu)}
                sx={{
                  cursor: 'pointer',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                <Typography
                  sx={{
                    color: hoveredMenu === menu ? 'white' : '#a0aec0',
                    fontSize: '16px',
                    fontWeight: hoveredMenu === menu ? '600' : '400',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                  {menu}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>

      {/* 현재 호버 상태 표시 */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="body2" color="text.secondary">
          {hoveredMenu ? `"${hoveredMenu}" 메뉴에 호버 중` : '메뉴에 마우스를 올려보세요'}
        </Typography>
      </Box>

      {/* 여러 색상 테마의 네비게이션 예시 */}
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        🎨 다양한 색상 테마
      </Typography>

      {/* 다크 블루 테마 */}
      <Paper elevation={2} sx={{ mb: 2, overflow: 'hidden', borderRadius: 2 }}>
        <Box
          sx={{
            width: '100%',
            height: '60px',
            backgroundColor: '#1a365d',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 3
          }}
        >
          <Typography sx={{ color: '#63b3ed', fontWeight: 'bold', fontSize: '20px' }}>
            DarkBlue
          </Typography>
          <Box sx={{ display: 'flex', gap: '15px' }}>
            {['Home', 'About', 'Services'].map((item) => (
              <Typography 
                key={item}
                sx={{ 
                  color: '#bee3f8', 
                  fontSize: '16px',
                  cursor: 'pointer',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Paper>

      {/* 그린 테마 */}
      <Paper elevation={2} sx={{ mb: 2, overflow: 'hidden', borderRadius: 2 }}>
        <Box
          sx={{
            width: '100%',
            height: '60px',
            backgroundColor: '#22543d',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 3
          }}
        >
          <Typography sx={{ color: '#68d391', fontWeight: 'bold', fontSize: '20px' }}>
            GreenTheme
          </Typography>
          <Box sx={{ display: 'flex', gap: '15px' }}>
            {['Dashboard', 'Projects', 'Team'].map((item) => (
              <Typography 
                key={item}
                sx={{ 
                  color: '#c6f6d5', 
                  fontSize: '16px',
                  cursor: 'pointer',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Paper>

      {/* 퍼플 테마 */}
      <Paper elevation={2} sx={{ mb: 4, overflow: 'hidden', borderRadius: 2 }}>
        <Box
          sx={{
            width: '100%',
            height: '60px',
            backgroundColor: '#553c9a',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 3
          }}
        >
          <Typography sx={{ color: '#d6bcfa', fontWeight: 'bold', fontSize: '20px' }}>
            PurpleBrand
          </Typography>
          <Box sx={{ display: 'flex', gap: '15px' }}>
            {['Shop', 'Cart', 'Account'].map((item) => (
              <Typography 
                key={item}
                sx={{ 
                  color: '#e9d8fd', 
                  fontSize: '16px',
                  cursor: 'pointer',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Paper>

      {/* Flexbox 속성 설명 */}
      <Paper elevation={1} sx={{ p: 3, bgcolor: 'info.light', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="info.dark">
          📐 Flexbox 핵심 속성
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
          <Box>
            <Typography variant="subtitle2" color="info.dark" gutterBottom>
              컨테이너 속성:
            </Typography>
            <Typography variant="body2" paragraph>
              • <strong>display: flex</strong> - 플렉스 컨테이너 설정
            </Typography>
            <Typography variant="body2" paragraph>
              • <strong>justify-content: space-between</strong> - 양 끝 정렬
            </Typography>
            <Typography variant="body2">
              • <strong>align-items: center</strong> - 세로 중앙 정렬
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" color="info.dark" gutterBottom>
              아이템 속성:
            </Typography>
            <Typography variant="body2" paragraph>
              • <strong>gap</strong> - 아이템 간 간격 설정
            </Typography>
            <Typography variant="body2" paragraph>
              • <strong>transition</strong> - 부드러운 호버 효과
            </Typography>
            <Typography variant="body2">
              • <strong>cursor: pointer</strong> - 클릭 가능 표시
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default FlexboxNavSection;