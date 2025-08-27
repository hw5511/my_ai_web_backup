import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button,
  Paper,
  Grid,
  Chip,
  keyframes
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import RefreshIcon from '@mui/icons-material/Refresh';

/**
 * Animation 섹션 컴포넌트
 * 
 * - CSS 트랜지션 애니메이션
 * - 재생 버튼으로 제어
 * - 페이드인/아웃, 크기 변화, 회전 효과
 * - 버튼 클릭 시 애니메이션 실행
 */

// 키프레임 애니메이션 정의
const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const scaleAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.5); }
  100% { transform: scale(1); }
`;

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const slideIn = keyframes`
  0% { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

function AnimationSection() {
  const [activeAnimations, setActiveAnimations] = useState({});

  // 애니메이션 설정 데이터
  const animationConfigs = [
    {
      id: 'fade',
      title: '💫 페이드 인/아웃',
      description: '투명도를 조절하여 나타났다 사라지는 효과',
      color: 'primary',
      animation: fadeInOut,
      duration: '2s',
      icon: '✨'
    },
    {
      id: 'scale',
      title: '📏 크기 변화',
      description: '객체의 크기를 확대/축소하는 효과',
      color: 'secondary',
      animation: scaleAnimation,
      duration: '1.5s',
      icon: '🔍'
    },
    {
      id: 'rotate',
      title: '🌀 회전',
      description: '360도 회전하는 효과',
      color: 'success',
      animation: rotateAnimation,
      duration: '2s',
      icon: '⭐'
    },
    {
      id: 'slide',
      title: '➡️ 슬라이드 인',
      description: '왼쪽에서 오른쪽으로 슬라이드하며 나타나는 효과',
      color: 'warning',
      animation: slideIn,
      duration: '1s',
      icon: '🚀'
    },
    {
      id: 'bounce',
      title: '🏀 바운스',
      description: '통통 튀는 듯한 바운스 효과',
      color: 'error',
      animation: bounce,
      duration: '2s',
      icon: '⚽'
    },
    {
      id: 'pulse',
      title: '💓 펄스',
      description: '심장 박동처럼 크기와 투명도가 변하는 효과',
      color: 'info',
      animation: pulse,
      duration: '1.5s',
      icon: '❤️'
    }
  ];

  // 애니메이션 시작
  const startAnimation = (animationId) => {
    setActiveAnimations(prev => ({
      ...prev,
      [animationId]: true
    }));

    // 애니메이션 지속 시간 후 자동 중지
    const config = animationConfigs.find(c => c.id === animationId);
    const duration = parseFloat(config.duration) * 1000;

    setTimeout(() => {
      setActiveAnimations(prev => ({
        ...prev,
        [animationId]: false
      }));
    }, duration);
  };

  // 애니메이션 중지
  const stopAnimation = (animationId) => {
    setActiveAnimations(prev => ({
      ...prev,
      [animationId]: false
    }));
  };

  // 모든 애니메이션 시작
  const startAllAnimations = () => {
    animationConfigs.forEach(config => {
      startAnimation(config.id);
    });
  };

  // 모든 애니메이션 중지
  const stopAllAnimations = () => {
    setActiveAnimations({});
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
        Animation 섹션
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 4
        }}
      >
        CSS 키프레임 애니메이션과 트랜지션을 활용한 다양한 시각 효과
      </Typography>

      {/* 전체 컨트롤 */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
        <Button
          variant="contained"
          startIcon={<PlayArrowIcon />}
          onClick={startAllAnimations}
          color="success"
        >
          모든 애니메이션 시작
        </Button>
        <Button
          variant="outlined"
          startIcon={<StopIcon />}
          onClick={stopAllAnimations}
          color="error"
        >
          모든 애니메이션 중지
        </Button>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={() => window.location.reload()}
        >
          페이지 새로고침
        </Button>
      </Box>

      {/* 애니메이션 카드들 */}
      <Grid container spacing={3}>
        {animationConfigs.map((config) => {
          const isActive = activeAnimations[config.id];
          
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={config.id}>
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
                <Typography variant="h6" gutterBottom>
                  {config.title}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" paragraph>
                  {config.description}
                </Typography>

                {/* 애니메이션 대상 요소 */}
                <Box 
                  sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 120,
                    mb: 2,
                    bgcolor: 'grey.50',
                    borderRadius: 2,
                    border: 2,
                    borderColor: 'grey.200',
                    borderStyle: 'dashed'
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: `${config.color}.main`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      animation: isActive ? `${config.animation} ${config.duration} ease-in-out infinite` : 'none'
                    }}
                  >
                    {config.icon}
                  </Box>
                </Box>

                {/* 상태 표시 */}
                <Chip 
                  label={isActive ? "애니메이션 중" : "대기 중"}
                  color={isActive ? config.color : "default"}
                  size="small"
                  sx={{ mb: 2 }}
                />

                {/* 컨트롤 버튼 */}
                <Box sx={{ mt: 'auto', display: 'flex', gap: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    color={config.color}
                    onClick={() => startAnimation(config.id)}
                    disabled={isActive}
                    startIcon={<PlayArrowIcon />}
                    fullWidth
                  >
                    시작
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => stopAnimation(config.id)}
                    disabled={!isActive}
                    startIcon={<StopIcon />}
                  >
                    중지
                  </Button>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      {/* 실시간 애니메이션 상태 */}
      <Paper elevation={1} sx={{ mt: 4, p: 3, bgcolor: 'secondary.light' }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'secondary.contrastText' }}>
          🎬 현재 실행 중인 애니메이션
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
          {Object.entries(activeAnimations)
            .filter(([_, isActive]) => isActive)
            .map(([animationId]) => {
              const config = animationConfigs.find(c => c.id === animationId);
              return (
                <Chip 
                  key={animationId}
                  label={`${config.icon} ${config.title}`}
                  color={config.color}
                  size="small"
                />
              );
            })
          }
          {Object.values(activeAnimations).every(v => !v) && (
            <Typography variant="body2" sx={{ color: 'secondary.contrastText', opacity: 0.8 }}>
              실행 중인 애니메이션이 없습니다
            </Typography>
          )}
        </Box>
      </Paper>

      {/* 기능 설명 */}
      <Box sx={{ mt: 4, p: 3, bgcolor: 'error.light', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="error.dark">
          🎭 Animation 특징
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>CSS Keyframes</strong>: @keyframes를 사용한 복잡한 애니메이션 정의
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>동적 제어</strong>: JavaScript로 애니메이션 시작/중지 제어
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>다양한 효과</strong>: 투명도, 크기, 위치, 회전 등 다양한 속성 애니메이션
        </Typography>
        <Typography variant="body2">
          • <strong>무한 반복</strong>: infinite 설정으로 연속 실행, 타이머로 자동 중지
        </Typography>
      </Box>
    </Box>
  );
}

export default AnimationSection;