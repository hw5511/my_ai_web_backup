import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid,
  Paper,
  Chip
} from '@mui/material';

/**
 * Hover 섹션 컴포넌트
 * 
 * - CSS 호버 효과 4가지
 * - 색상 변경, 그림자, 크기 변화, 회전
 * - MUI Box 컴포넌트 활용
 * - 다양한 호버 패턴 데모
 */
function HoverSection() {
  const [hoveredItem, setHoveredItem] = useState('');

  // 호버 효과 설정 데이터
  const hoverConfigs = [
    {
      id: 'color',
      title: '🎨 색상 변경',
      description: '호버 시 배경색과 텍스트 색상이 변경됩니다',
      emoji: '🌈',
      baseStyle: {
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        p: 4,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 150,
        textAlign: 'center'
      },
      hoverStyle: {
        bgcolor: 'secondary.main',
        color: 'secondary.contrastText',
        transform: 'translateY(-2px)'
      }
    },
    {
      id: 'shadow',
      title: '✨ 그림자 효과',
      description: '호버 시 깊은 그림자가 생성됩니다',
      emoji: '🌟',
      baseStyle: {
        bgcolor: 'success.light',
        color: 'success.dark',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        p: 4,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 150,
        textAlign: 'center',
        boxShadow: 2
      },
      hoverStyle: {
        boxShadow: 12,
        transform: 'translateY(-8px)'
      }
    },
    {
      id: 'scale',
      title: '🔍 크기 변화',
      description: '호버 시 크기가 확대됩니다',
      emoji: '📏',
      baseStyle: {
        bgcolor: 'warning.main',
        color: 'warning.contrastText',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        p: 4,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 150,
        textAlign: 'center'
      },
      hoverStyle: {
        transform: 'scale(1.1)',
        zIndex: 10
      }
    },
    {
      id: 'rotate',
      title: '🌀 회전 효과',
      description: '호버 시 3D 회전 효과가 적용됩니다',
      emoji: '🔄',
      baseStyle: {
        bgcolor: 'error.main',
        color: 'error.contrastText',
        transition: 'all 0.4s ease-in-out',
        cursor: 'pointer',
        p: 4,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 150,
        textAlign: 'center',
        transformStyle: 'preserve-3d'
      },
      hoverStyle: {
        transform: 'rotateY(180deg) rotateX(10deg)',
        boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
      }
    },
    {
      id: 'gradient',
      title: '🌅 그라데이션',
      description: '호버 시 그라데이션 배경이 변화됩니다',
      emoji: '🎆',
      baseStyle: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color: 'white',
        transition: 'all 0.5s ease',
        cursor: 'pointer',
        p: 4,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 150,
        textAlign: 'center'
      },
      hoverStyle: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        transform: 'translateY(-5px) scale(1.02)'
      }
    },
    {
      id: 'border',
      title: '🔲 테두리 애니메이션',
      description: '호버 시 테두리가 애니메이션됩니다',
      emoji: '⭕',
      baseStyle: {
        bgcolor: 'background.paper',
        color: 'text.primary',
        border: '2px solid',
        borderColor: 'grey.300',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        p: 4,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 150,
        textAlign: 'center'
      },
      hoverStyle: {
        borderColor: 'primary.main',
        borderWidth: '4px',
        transform: 'translateY(-3px)',
        boxShadow: '0 8px 25px rgba(25, 118, 210, 0.3)'
      }
    }
  ];

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
        Hover 섹션
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 4
        }}
      >
        CSS 호버 효과를 활용한 다양한 인터랙션 패턴 데모
      </Typography>

      {/* 현재 호버 상태 표시 */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Chip 
          label={hoveredItem ? `"${hoveredItem}" 호버 중` : "마우스를 카드 위에 올려보세요"}
          color={hoveredItem ? "primary" : "default"}
          variant={hoveredItem ? "filled" : "outlined"}
        />
      </Box>

      {/* 호버 효과 카드들 */}
      <Grid container spacing={3}>
        {hoverConfigs.map((config) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={config.id}>
            <Box
              onMouseEnter={() => setHoveredItem(config.title)}
              onMouseLeave={() => setHoveredItem('')}
              sx={{
                ...config.baseStyle,
                '&:hover': config.hoverStyle
              }}
            >
              <Typography variant="h2" sx={{ mb: 1 }}>
                {config.emoji}
              </Typography>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                {config.title}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {config.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* 복합 호버 효과 데모 */}
      <Paper elevation={2} sx={{ mt: 4, p: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          🎪 복합 호버 효과
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mb: 3 }}>
          여러 효과를 조합한 고급 호버 인터랙션
        </Typography>

        <Grid container spacing={2}>
          {/* 카드 스타일 호버 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                p: 3,
                bgcolor: 'background.paper',
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'grey.200',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-12px) scale(1.02)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  borderColor: 'primary.main',
                  bgcolor: 'primary.light',
                  color: 'primary.contrastText'
                }
              }}
              onMouseEnter={() => setHoveredItem('카드 스타일')}
              onMouseLeave={() => setHoveredItem('')}
            >
              <Typography variant="h5" gutterBottom>
                🃏 카드 호버
              </Typography>
              <Typography variant="body2">
                이동, 크기, 그림자, 색상이 모두 조합된 효과
              </Typography>
            </Box>
          </Grid>

          {/* 네온 효과 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                p: 3,
                bgcolor: 'grey.900',
                color: 'common.white',
                borderRadius: 3,
                border: '2px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: '#00ff88',
                  boxShadow: '0 0 20px #00ff88, inset 0 0 20px rgba(0,255,136,0.1)',
                  transform: 'translateY(-5px)',
                  textShadow: '0 0 10px #00ff88'
                }
              }}
              onMouseEnter={() => setHoveredItem('네온 효과')}
              onMouseLeave={() => setHoveredItem('')}
            >
              <Typography variant="h5" gutterBottom>
                💡 네온 호버
              </Typography>
              <Typography variant="body2">
                사이버펑크 스타일의 네온 글로우 효과
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* 기능 설명 */}
      <Box sx={{ mt: 4, p: 3, bgcolor: 'secondary.light', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="secondary.dark">
          🎨 Hover 효과 특징
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>CSS Transitions</strong>: 부드러운 상태 변화를 위한 트랜지션 효과
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>Transform 속성</strong>: translate, scale, rotate를 활용한 변형 효과
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>Box Shadow</strong>: 깊이감을 주는 그림자 효과
        </Typography>
        <Typography variant="body2">
          • <strong>상태 추적</strong>: onMouseEnter/Leave 이벤트로 호버 상태 관리
        </Typography>
      </Box>
    </Box>
  );
}

export default HoverSection;