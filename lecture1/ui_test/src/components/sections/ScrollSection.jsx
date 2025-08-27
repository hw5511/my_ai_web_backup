import { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Paper,
  Grid,
  LinearProgress,
  Chip,
  Button,
  Divider
} from '@mui/material';
import ScrollIcon from '@mui/icons-material/UnfoldMore';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

/**
 * Scroll 섹션 컴포넌트
 * 
 * - 고정 높이 스크롤 컨테이너
 * - 긴 콘텐츠로 스크롤 테스트
 * - 스크롤 이벤트 처리
 * - 스크롤 위치 표시
 */
function ScrollSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  // 긴 콘텐츠 데이터 생성
  const longContent = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    title: `섹션 ${index + 1}`,
    content: `이것은 ${index + 1}번째 콘텐츠입니다. 스크롤 테스트를 위한 충분한 길이의 텍스트를 제공합니다. 스크롤 위치와 퍼센트가 실시간으로 업데이트되는 것을 확인할 수 있습니다.`,
    color: `hsl(${(index * 30) % 360}, 70%, 85%)`
  }));

  // 스크롤 이벤트 핸들러
  const handleScroll = (e) => {
    const container = e.target;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    const percentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    setScrollPosition(Math.round(scrollTop));
    setScrollPercentage(Math.round(percentage));
    setIsScrolling(true);

    // 스크롤 중 상태 관리
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  };

  // 상단으로 스크롤
  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // 하단으로 스크롤
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  // 특정 위치로 스크롤
  const scrollToPosition = (percentage) => {
    if (scrollRef.current) {
      const scrollHeight = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      const targetPosition = (scrollHeight * percentage) / 100;
      
      scrollRef.current.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

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
        Scroll 섹션
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 4
        }}
      >
        고정 높이 컨테이너의 스크롤 이벤트 처리 및 위치 표시
      </Typography>

      <Grid container spacing={3}>
        {/* 스크롤 상태 및 컨트롤 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper elevation={2} sx={{ p: 3, height: 'fit-content', position: 'sticky', top: 0 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <ScrollIcon sx={{ mr: 1 }} />
              스크롤 상태
            </Typography>
            
            {/* 스크롤 위치 표시 */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                스크롤 위치: {scrollPosition}px
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                진행률: {scrollPercentage}%
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={scrollPercentage}
                sx={{ mt: 1, height: 8, borderRadius: 4 }}
              />
              <Box sx={{ mt: 1 }}>
                <Chip 
                  label={isScrolling ? "스크롤 중" : "정지"}
                  color={isScrolling ? "primary" : "default"}
                  size="small"
                />
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* 스크롤 컨트롤 버튼 */}
            <Typography variant="subtitle2" gutterBottom>
              빠른 이동:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button 
                variant="outlined" 
                size="small"
                startIcon={<ArrowUpwardIcon />}
                onClick={scrollToTop}
              >
                최상단
              </Button>
              <Button 
                variant="outlined" 
                size="small"
                onClick={() => scrollToPosition(25)}
              >
                25%
              </Button>
              <Button 
                variant="outlined" 
                size="small"
                onClick={() => scrollToPosition(50)}
              >
                50%
              </Button>
              <Button 
                variant="outlined" 
                size="small"
                onClick={() => scrollToPosition(75)}
              >
                75%
              </Button>
              <Button 
                variant="outlined" 
                size="small"
                onClick={scrollToBottom}
              >
                최하단
              </Button>
            </Box>

            {/* 현재 보이는 섹션 표시 */}
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle2" gutterBottom>
              현재 위치:
            </Typography>
            <Chip 
              label={`섹션 ${Math.floor((scrollPercentage / 100) * longContent.length) + 1} 근처`}
              color="secondary"
              size="small"
            />
          </Paper>
        </Grid>

        {/* 스크롤 가능한 콘텐츠 */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper elevation={2} sx={{ height: 600, overflow: 'hidden' }}>
            <Box
              ref={scrollRef}
              onScroll={handleScroll}
              sx={{
                height: '100%',
                overflowY: 'auto',
                p: 2,
                '&::-webkit-scrollbar': {
                  width: '12px'
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f1f1f1',
                  borderRadius: '6px'
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#888',
                  borderRadius: '6px',
                  '&:hover': {
                    background: '#555'
                  }
                }
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
                📜 긴 콘텐츠 스크롤 테스트
              </Typography>

              {longContent.map((item) => (
                <Paper 
                  key={item.id}
                  elevation={1}
                  sx={{ 
                    p: 2, 
                    mb: 2,
                    bgcolor: item.color,
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                      transform: 'translateX(5px)'
                    }
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">
                    {item.content}
                  </Typography>
                  <Chip 
                    label={`ID: ${item.id}`}
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </Paper>
              ))}

              {/* 끝 표시 */}
              <Paper 
                elevation={3}
                sx={{ 
                  p: 3, 
                  textAlign: 'center',
                  bgcolor: 'success.light'
                }}
              >
                <Typography variant="h6" color="success.dark">
                  🎉 스크롤 끝에 도달했습니다!
                </Typography>
                <Typography variant="body2" color="success.dark">
                  총 {longContent.length}개의 섹션을 모두 확인하셨습니다.
                </Typography>
              </Paper>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* 기능 설명 */}
      <Box sx={{ mt: 4, p: 3, bgcolor: 'info.light', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="info.dark">
          📊 Scroll 이벤트 특징
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>실시간 위치 추적</strong>: 스크롤할 때마다 픽셀과 퍼센트 단위로 위치 표시
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>진행률 바</strong>: LinearProgress로 시각적 진행 상황 표시
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>빠른 이동</strong>: 특정 위치로 부드러운 스크롤 이동
        </Typography>
        <Typography variant="body2">
          • <strong>커스텀 스크롤바</strong>: Webkit 스크롤바 스타일링 적용
        </Typography>
      </Box>
    </Box>
  );
}

export default ScrollSection;