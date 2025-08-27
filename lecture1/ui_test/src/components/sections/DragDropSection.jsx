import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper,
  Grid,
  Chip,
  Alert
} from '@mui/material';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import DropIcon from '@mui/icons-material/SystemUpdateAlt';

/**
 * Drag & Drop 섹션 컴포넌트
 * 
 * HTML5 드래그 API 사용
 * - 드래그 가능한 아이템 3개
 * - 드롭 영역 1개  
 * - 드래그 시 시각적 피드백
 */
function DragDropSection() {
  const [draggedItem, setDraggedItem] = useState(null);
  const [droppedItems, setDroppedItems] = useState([]);
  const [dragOverZone, setDragOverZone] = useState(false);

  // 드래그 가능한 아이템들
  const draggableItems = [
    { 
      id: 'item1', 
      label: '📄 문서 파일', 
      type: 'document',
      color: 'primary',
      description: 'PDF, DOC, TXT 파일'
    },
    { 
      id: 'item2', 
      label: '🖼️ 이미지 파일', 
      type: 'image',
      color: 'secondary',
      description: 'JPG, PNG, GIF 파일'
    },
    { 
      id: 'item3', 
      label: '🎵 오디오 파일', 
      type: 'audio',
      color: 'success',
      description: 'MP3, WAV, FLAC 파일'
    }
  ];

  // 드래그 시작
  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', item.id);
    
    // 드래그 이미지 커스터마이징
    const dragImage = e.target.cloneNode(true);
    dragImage.style.opacity = '0.7';
    e.dataTransfer.setDragImage(dragImage, 0, 0);
  };

  // 드래그 끝
  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  // 드롭 영역에 드래그 오버
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverZone(true);
  };

  // 드롭 영역에서 드래그 나감
  const handleDragLeave = () => {
    setDragOverZone(false);
  };

  // 드롭 실행
  const handleDrop = (e) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('text/html');
    const item = draggableItems.find(item => item.id === itemId);
    
    if (item && !droppedItems.find(dropped => dropped.id === item.id)) {
      setDroppedItems(prev => [...prev, { ...item, dropTime: new Date().toLocaleTimeString() }]);
    }
    
    setDragOverZone(false);
    setDraggedItem(null);
  };

  // 드롭된 아이템 제거
  const removeDroppedItem = (itemId) => {
    setDroppedItems(prev => prev.filter(item => item.id !== itemId));
  };

  // 모든 아이템 클리어
  const clearAllItems = () => {
    setDroppedItems([]);
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
        Drag & Drop 섹션
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 4
        }}
      >
        HTML5 드래그 API를 사용한 파일 드래그 앤 드롭 시뮬레이션
      </Typography>

      <Grid container spacing={3}>
        {/* 드래그 가능한 아이템들 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <DragHandleIcon sx={{ mr: 1 }} />
            드래그 가능한 파일들
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {draggableItems.map((item) => {
              const isDropped = droppedItems.find(dropped => dropped.id === item.id);
              
              return (
                <Paper
                  key={item.id}
                  elevation={draggedItem?.id === item.id ? 8 : 2}
                  sx={{
                    p: 2,
                    cursor: isDropped ? 'not-allowed' : 'grab',
                    opacity: isDropped ? 0.5 : draggedItem?.id === item.id ? 0.7 : 1,
                    transform: draggedItem?.id === item.id ? 'rotate(3deg) scale(1.02)' : 'none',
                    transition: 'all 0.2s ease',
                    border: draggedItem?.id === item.id ? 2 : 0,
                    borderColor: 'primary.main',
                    borderStyle: 'dashed',
                    '&:hover': {
                      transform: isDropped ? 'none' : 'scale(1.02)',
                      boxShadow: isDropped ? 'none' : 4
                    }
                  }}
                  draggable={!isDropped}
                  onDragStart={(e) => !isDropped && handleDragStart(e, item)}
                  onDragEnd={handleDragEnd}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {item.label}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                    <Chip 
                      label={isDropped ? 'DROPPED' : 'DRAG ME'}
                      color={isDropped ? 'default' : item.color}
                      size="small"
                    />
                  </Box>
                </Paper>
              );
            })}
          </Box>
        </Grid>

        {/* 드롭 영역 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <DropIcon sx={{ mr: 1 }} />
            드롭 영역
          </Typography>
          
          <Paper
            elevation={dragOverZone ? 8 : 2}
            sx={{
              minHeight: 300,
              p: 3,
              border: 3,
              borderStyle: 'dashed',
              borderColor: dragOverZone ? 'success.main' : 'grey.300',
              bgcolor: dragOverZone ? 'success.light' : 'grey.50',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: droppedItems.length > 0 ? 'flex-start' : 'center',
              transition: 'all 0.3s ease',
              transform: dragOverZone ? 'scale(1.02)' : 'none'
            }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {droppedItems.length === 0 ? (
              <Box sx={{ textAlign: 'center' }}>
                <DropIcon sx={{ fontSize: 64, color: 'grey.400', mb: 2 }} />
                <Typography variant="h6" color="text.secondary">
                  파일을 여기로 드래그하세요
                </Typography>
                <Typography variant="body2" color="text.disabled">
                  {dragOverZone ? '놓으면 업로드됩니다!' : '드래그 앤 드롭으로 파일 업로드'}
                </Typography>
              </Box>
            ) : (
              <>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    업로드된 파일들 ({droppedItems.length}개)
                  </Typography>
                  <Chip 
                    label="모두 삭제" 
                    size="small" 
                    onClick={clearAllItems}
                    sx={{ cursor: 'pointer' }}
                  />
                </Box>
                
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {droppedItems.map((item) => (
                    <Paper 
                      key={`dropped-${item.id}`}
                      sx={{ p: 2, bgcolor: 'background.paper' }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="subtitle2">{item.label}</Typography>
                          <Typography variant="caption" color="text.secondary">
                            업로드 시간: {item.dropTime}
                          </Typography>
                        </Box>
                        <Chip 
                          label="제거"
                          size="small"
                          color="error"
                          onClick={() => removeDroppedItem(item.id)}
                          sx={{ cursor: 'pointer' }}
                        />
                      </Box>
                    </Paper>
                  ))}
                </Box>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>

      {/* 드래그 상태 표시 */}
      {draggedItem && (
        <Alert severity="info" sx={{ mt: 3 }}>
          🚀 "{draggedItem.label}" 파일을 드래그 중입니다. 드롭 영역에 놓으세요!
        </Alert>
      )}

      {/* 기능 설명 */}
      <Box sx={{ mt: 4, p: 3, bgcolor: 'warning.light', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="warning.dark">
          🎯 Drag & Drop 특징
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>HTML5 API</strong>: 네이티브 드래그 앤 드롭 기능 활용
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>시각적 피드백</strong>: 드래그 시 회전, 스케일, 투명도 변화
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>드롭 영역 하이라이트</strong>: 드래그 오버 시 색상과 크기 변화
        </Typography>
        <Typography variant="body2">
          • <strong>중복 방지</strong>: 이미 드롭된 아이템은 재드래그 불가
        </Typography>
      </Box>
    </Box>
  );
}

export default DragDropSection;