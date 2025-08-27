import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Slider,
  Grid,
  Paper,
  Chip
} from '@mui/material';

/**
 * Slider 섹션 컴포넌트
 * 
 * MUI Slider 컴포넌트 사용
 * - 0-100 범위 슬라이더
 * - 현재값 실시간 표시
 * - marks와 valueLabelDisplay 설정
 */
function SliderSection() {
  const [volume, setVolume] = useState(30);
  const [brightness, setBrightness] = useState(75);
  const [progress, setProgress] = useState(45);
  const [temperature, setTemperature] = useState(20);

  // 슬라이더 설정 데이터
  const sliderConfigs = [
    {
      id: 'volume',
      label: '🔊 볼륨',
      value: volume,
      onChange: setVolume,
      min: 0,
      max: 100,
      step: 5,
      marks: [
        { value: 0, label: '🔇' },
        { value: 25, label: '🔈' },
        { value: 50, label: '🔉' },
        { value: 75, label: '🔊' },
        { value: 100, label: '📢' }
      ],
      color: 'primary',
      unit: '%'
    },
    {
      id: 'brightness',
      label: '💡 화면 밝기',
      value: brightness,
      onChange: setBrightness,
      min: 0,
      max: 100,
      step: 1,
      marks: [
        { value: 0, label: '🌑' },
        { value: 25, label: '🌓' },
        { value: 50, label: '🌕' },
        { value: 75, label: '☀️' },
        { value: 100, label: '🔆' }
      ],
      color: 'secondary',
      unit: '%'
    },
    {
      id: 'progress',
      label: '📈 작업 진행률',
      value: progress,
      onChange: setProgress,
      min: 0,
      max: 100,
      step: 10,
      marks: [
        { value: 0, label: '시작' },
        { value: 50, label: '중간' },
        { value: 100, label: '완료' }
      ],
      color: 'success',
      unit: '%'
    },
    {
      id: 'temperature',
      label: '🌡️ 온도',
      value: temperature,
      onChange: setTemperature,
      min: -10,
      max: 50,
      step: 1,
      marks: [
        { value: -10, label: '🧊 -10°' },
        { value: 0, label: '❄️ 0°' },
        { value: 20, label: '🌤️ 20°' },
        { value: 35, label: '🌞 35°' },
        { value: 50, label: '🔥 50°' }
      ],
      color: 'warning',
      unit: '°C'
    }
  ];

  const getValueColor = (config) => {
    const percentage = ((config.value - config.min) / (config.max - config.min)) * 100;
    
    if (percentage <= 25) return 'error';
    if (percentage <= 50) return 'warning';
    if (percentage <= 75) return 'info';
    return 'success';
  };

  const getValueDescription = (config) => {
    const percentage = ((config.value - config.min) / (config.max - config.min)) * 100;
    
    if (config.id === 'volume') {
      if (config.value === 0) return '음소거';
      if (percentage <= 30) return '낮음';
      if (percentage <= 70) return '보통';
      return '높음';
    }
    
    if (config.id === 'brightness') {
      if (percentage <= 25) return '매우 어둡';
      if (percentage <= 50) return '어둡';
      if (percentage <= 75) return '밝음';
      return '매우 밝음';
    }
    
    if (config.id === 'progress') {
      if (percentage === 0) return '대기 중';
      if (percentage < 100) return '진행 중';
      return '완료';
    }
    
    if (config.id === 'temperature') {
      if (config.value <= 0) return '얼음';
      if (config.value <= 15) return '추움';
      if (config.value <= 25) return '적당';
      if (config.value <= 35) return '따뜻';
      return '뜨거움';
    }
    
    return '';
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
        Slider 섹션
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 4
        }}
      >
        MUI Slider 컴포넌트를 사용한 값 조절 및 실시간 표시
      </Typography>

      {/* 슬라이더들 */}
      <Grid container spacing={3}>
        {sliderConfigs.map((config) => (
          <Grid size={{ xs: 12, md: 6 }} key={config.id}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 4, 
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 3, 
                  textAlign: 'center',
                  color: 'text.primary',
                  fontWeight: 'bold'
                }}
              >
                {config.label}
              </Typography>
              
              <Box sx={{ px: 2, mb: 3 }}>
                <Slider
                  value={config.value}
                  min={config.min}
                  max={config.max}
                  step={config.step}
                  marks={config.marks}
                  valueLabelDisplay="auto"
                  color={config.color}
                  onChange={(_, newValue) => config.onChange(newValue)}
                  sx={{ mb: 2 }}
                />
              </Box>

              {/* 현재값 실시간 표시 */}
              <Box 
                sx={{ 
                  mt: 'auto',
                  p: 3,
                  bgcolor: `${config.color}.light`,
                  borderRadius: 2,
                  textAlign: 'center'
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: `${config.color}.contrastText`,
                    fontWeight: 'bold',
                    mb: 1
                  }}
                >
                  {config.value}{config.unit}
                </Typography>
                
                <Chip 
                  label={getValueDescription(config)}
                  color={getValueColor(config)}
                  variant="filled"
                  size="small"
                />
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* 전체 설정값 요약 */}
      <Paper elevation={1} sx={{ mt: 4, p: 3, bgcolor: 'info.main', color: 'info.contrastText' }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          🎛️ 현재 설정값 요약
        </Typography>
        <Grid container spacing={2}>
          {sliderConfigs.map((config) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={config.id}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
                  {config.label}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {config.value}{config.unit}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  {getValueDescription(config)}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* 기능 설명 */}
      <Box sx={{ mt: 3, p: 3, bgcolor: 'success.light', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="success.dark">
          🎚️ Slider 특징
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>연속값 조절</strong>: 드래그로 부드럽게 값 변경 가능
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>Marks 표시</strong>: 주요 지점에 시각적 가이드 제공
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>Value Label</strong>: 드래그 중 현재 값을 툴팁으로 표시
        </Typography>
        <Typography variant="body2">
          • <strong>실시간 피드백</strong>: 값에 따른 색상과 설명 자동 변경
        </Typography>
      </Box>
    </Box>
  );
}

export default SliderSection;