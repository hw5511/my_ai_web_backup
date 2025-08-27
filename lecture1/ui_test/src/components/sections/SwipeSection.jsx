import { useState, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Grid,
  Paper,
  Chip,
  Alert
} from '@mui/material';
import SwipeIcon from '@mui/icons-material/SwipeRightAlt';
import TouchAppIcon from '@mui/icons-material/TouchApp';

/**
 * Swipe 섹션 컴포넌트
 * 
 * - 터치 이벤트 처리
 * - 좌우 스와이프 감지
 * - 스와이프 방향 표시
 * - 모바일에서 테스트 가능한 데모
 */
function SwipeSection() {
  const [swipeHistory, setSwipeHistory] = useState([]);
  const [currentSwipe, setCurrentSwipe] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // 스와이프 감지 설정
  const minSwipeDistance = 50; // 최소 스와이프 거리

  // 스와이프 카드 데이터
  const swipeCards = [
    {
      id: 'card1',
      title: '📱 기본 스와이프',
      content: '좌우로 스와이프해보세요',
      color: 'primary'
    },
    {
      id: 'card2', 
      title: '🎯 정밀 스와이프',
      content: '빠르게 스와이프해보세요',
      color: 'secondary'
    },
    {
      id: 'card3',
      title: '✨ 부드러운 스와이프',
      content: '천천히 스와이프해보세요',
      color: 'success'
    }
  ];

  // 터치 시작
  const handleTouchStart = (e, cardId) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setCurrentSwipe({ cardId, direction: null, distance: 0 });
  };

  // 터치 이동
  const handleTouchMove = (e, cardId) => {
    if (!touchStart) return;
    
    const currentTouch = e.targetTouches[0].clientX;
    const distance = currentTouch - touchStart;
    const direction = distance > 0 ? 'right' : 'left';
    
    setCurrentSwipe({ 
      cardId, 
      direction, 
      distance: Math.abs(distance) 
    });
    
    setTouchEnd(currentTouch);
  };

  // 터치 종료
  const handleTouchEnd = (e, cardId) => {
    if (!touchStart || !touchEnd) {
      setCurrentSwipe(null);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe || isRightSwipe) {
      const swipeData = {
        cardId,
        direction: isLeftSwipe ? 'left' : 'right',
        distance: Math.abs(distance),
        timestamp: new Date().toLocaleTimeString(),
        speed: Math.abs(distance) > 100 ? 'fast' : 'slow'
      };
      
      setSwipeHistory(prev => [swipeData, ...prev.slice(0, 4)]); // 최근 5개만 유지
      
      // 스와이프 완료 알림
      const direction = isLeftSwipe ? '왼쪽' : '오른쪽';
      alert(`${cardId}에서 ${direction}으로 스와이프 감지!\n거리: ${Math.round(Math.abs(distance))}px`);
    }
    
    setCurrentSwipe(null);
    setTouchStart(null);
    setTouchEnd(null);
  };

  // 마우스 이벤트 (데스크톱에서 테스트용)
  const handleMouseDown = (e, cardId) => {
    setTouchStart(e.clientX);
    setCurrentSwipe({ cardId, direction: null, distance: 0 });
  };

  const handleMouseMove = (e, cardId) => {
    if (!touchStart || !currentSwipe) return;
    
    const distance = e.clientX - touchStart;
    const direction = distance > 0 ? 'right' : 'left';
    
    setCurrentSwipe({ 
      cardId, 
      direction, 
      distance: Math.abs(distance) 
    });
  };

  const handleMouseUp = (e, cardId) => {
    if (!touchStart) return;
    
    const distance = touchStart - e.clientX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe || isRightSwipe) {
      const swipeData = {
        cardId,
        direction: isLeftSwipe ? 'left' : 'right',
        distance: Math.abs(distance),
        timestamp: new Date().toLocaleTimeString(),
        speed: Math.abs(distance) > 100 ? 'fast' : 'slow'
      };
      
      setSwipeHistory(prev => [swipeData, ...prev.slice(0, 4)]);
      
      const direction = isLeftSwipe ? '왼쪽' : '오른쪽';
      alert(`${cardId}에서 ${direction}으로 스와이프 감지!\n거리: ${Math.round(Math.abs(distance))}px`);
    }
    
    setCurrentSwipe(null);
    setTouchStart(null);
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
        Swipe 섹션
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 4
        }}
      >
        터치 및 마우스 드래그 이벤트를 활용한 스와이프 인터랙션
      </Typography>

      {/* 사용법 안내 */}
      <Alert severity="info" sx={{ mb: 3 }}>
        <Typography variant="body2">
          📱 <strong>모바일</strong>: 카드를 손가락으로 좌우로 스와이프<br/>
          🖱️ <strong>데스크톱</strong>: 카드를 마우스로 드래그하여 스와이프 테스트
        </Typography>
      </Alert>

      {/* 현재 스와이프 상태 */}
      {currentSwipe && (
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Chip 
            label={`${currentSwipe.cardId} - ${currentSwipe.direction || '감지 중'} (${Math.round(currentSwipe.distance)}px)`}
            color="warning"
            icon={<SwipeIcon />}
          />
        </Box>
      )}

      {/* 스와이프 카드들 */}
      <Grid container spacing={3}>
        {swipeCards.map((card) => (
          <Grid size={{ xs: 12, md: 4 }} key={card.id}>
            <Paper 
              elevation={currentSwipe?.cardId === card.id ? 8 : 2}
              sx={{ 
                p: 4,
                minHeight: 200,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: 'grab',
                userSelect: 'none',
                transition: 'all 0.2s ease',
                bgcolor: currentSwipe?.cardId === card.id ? `${card.color}.light` : 'background.paper',
                color: currentSwipe?.cardId === card.id ? `${card.color}.contrastText` : 'text.primary',
                border: currentSwipe?.cardId === card.id ? 2 : 0,
                borderColor: `${card.color}.main`,
                borderStyle: 'dashed',
                transform: currentSwipe?.cardId === card.id 
                  ? `translateX(${currentSwipe.direction === 'right' ? '' : '-'}${Math.min(currentSwipe.distance / 3, 20)}px)`
                  : 'none'
              }}
              // 터치 이벤트 (모바일)
              onTouchStart={(e) => handleTouchStart(e, card.id)}
              onTouchMove={(e) => handleTouchMove(e, card.id)}
              onTouchEnd={(e) => handleTouchEnd(e, card.id)}
              // 마우스 이벤트 (데스크톱)
              onMouseDown={(e) => handleMouseDown(e, card.id)}
              onMouseMove={(e) => handleMouseMove(e, card.id)}
              onMouseUp={(e) => handleMouseUp(e, card.id)}
              onMouseLeave={() => {
                setCurrentSwipe(null);
                setTouchStart(null);
              }}
            >
              <TouchAppIcon 
                sx={{ 
                  fontSize: 48, 
                  mb: 2,
                  color: currentSwipe?.cardId === card.id ? 'inherit' : `${card.color}.main`
                }} 
              />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                {card.title}
              </Typography>
              <Typography variant="body2">
                {card.content}
              </Typography>
              
              {currentSwipe?.cardId === card.id && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="caption">
                    {currentSwipe.direction === 'left' ? '← 왼쪽' : currentSwipe.direction === 'right' ? '오른쪽 →' : '준비 중...'}
                  </Typography>
                </Box>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* 스와이프 히스토리 */}
      <Paper elevation={1} sx={{ mt: 4, p: 3, bgcolor: 'secondary.light' }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'secondary.dark' }}>
          📊 스와이프 히스토리
        </Typography>
        {swipeHistory.length > 0 ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {swipeHistory.map((swipe, index) => (
              <Box 
                key={`${swipe.cardId}-${swipe.timestamp}-${index}`}
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  p: 1,
                  bgcolor: 'background.paper',
                  borderRadius: 1
                }}
              >
                <Typography variant="body2">
                  {swipe.cardId}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Chip 
                    label={swipe.direction === 'left' ? '← 왼쪽' : '오른쪽 →'}
                    size="small"
                    color="primary"
                  />
                  <Chip 
                    label={`${swipe.distance}px`}
                    size="small"
                    color="secondary"
                  />
                  <Chip 
                    label={swipe.speed}
                    size="small"
                    color={swipe.speed === 'fast' ? 'error' : 'success'}
                  />
                </Box>
                <Typography variant="caption" color="text.secondary">
                  {swipe.timestamp}
                </Typography>
              </Box>
            ))}
          </Box>
        ) : (
          <Typography variant="body2" sx={{ textAlign: 'center', color: 'secondary.dark' }}>
            아직 스와이프한 내역이 없습니다. 카드를 스와이프해보세요!
          </Typography>
        )}
      </Paper>

      {/* 기능 설명 */}
      <Box sx={{ mt: 4, p: 3, bgcolor: 'warning.light', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="warning.dark">
          📱 Swipe 인터랙션 특징
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>터치 이벤트</strong>: touchStart, touchMove, touchEnd로 모바일 스와이프 감지
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>마우스 지원</strong>: 데스크톱에서도 드래그로 스와이프 테스트 가능
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>임계값 설정</strong>: 최소 50px 이동해야 스와이프로 인식
        </Typography>
        <Typography variant="body2">
          • <strong>실시간 피드백</strong>: 스와이프 중 방향과 거리를 시각적으로 표시
        </Typography>
      </Box>
    </Box>
  );
}

export default SwipeSection;