import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  Paper,
  Chip,
  Alert
} from '@mui/material';

/**
 * Radio 섹션 컴포넌트
 * 
 * MUI RadioGroup과 FormControlLabel을 사용한 라디오 버튼
 * - 3-4개 라디오 옵션
 * - 선택값 실시간 표시
 * - FormLabel로 그룹 제목 설정
 */
function RadioSection() {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');

  // 라디오 그룹 옵션 데이터
  const radioConfigs = [
    {
      id: 'theme',
      label: '🎨 UI 테마 선택',
      value: selectedTheme,
      onChange: setSelectedTheme,
      options: [
        { value: 'light', label: '☀️ 라이트 모드' },
        { value: 'dark', label: '🌙 다크 모드' },
        { value: 'auto', label: '🔄 시스템 설정' },
        { value: 'custom', label: '🎛️ 커스텀' }
      ]
    },
    {
      id: 'size',
      label: '📏 화면 크기 설정',
      value: selectedSize,
      onChange: setSelectedSize,
      options: [
        { value: 'small', label: '📱 Small (모바일)' },
        { value: 'medium', label: '💻 Medium (태블릿)' },
        { value: 'large', label: '🖥️ Large (데스크톱)' }
      ]
    },
    {
      id: 'plan',
      label: '💳 요금제 선택',
      value: selectedPlan,
      onChange: setSelectedPlan,
      options: [
        { value: 'free', label: '🆓 Free - 기본 기능' },
        { value: 'pro', label: '⭐ Pro - 확장 기능' },
        { value: 'enterprise', label: '🏢 Enterprise - 모든 기능' },
        { value: 'custom', label: '🔧 Custom - 맞춤 설정' }
      ]
    }
  ];

  const handleChange = (configId, value) => {
    const config = radioConfigs.find(c => c.id === configId);
    if (config) {
      config.onChange(value);
    }
  };

  const getSelectedLabel = (config) => {
    const selectedOption = config.options.find(option => option.value === config.value);
    return selectedOption ? selectedOption.label : '';
  };

  const getSelectedCount = () => {
    return radioConfigs.filter(config => config.value !== '').length;
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
        Radio 섹션
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 4
        }}
      >
        MUI RadioGroup과 FormControlLabel을 사용한 단일 선택 옵션
      </Typography>

      {/* 선택 진행률 표시 */}
      <Alert 
        severity={getSelectedCount() === radioConfigs.length ? "success" : "info"} 
        sx={{ mb: 3 }}
      >
        <Typography variant="body2">
          설정 완료: {getSelectedCount()}/{radioConfigs.length}개 항목 선택됨
        </Typography>
      </Alert>

      {/* 라디오 그룹들 */}
      <Grid container spacing={3}>
        {radioConfigs.map((config) => (
          <Grid size={{ xs: 12, md: 4 }} key={config.id}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: config.value ? '2px solid' : 'none',
                borderColor: config.value ? 'primary.main' : 'transparent'
              }}
            >
              <FormControl component="fieldset" sx={{ width: '100%' }}>
                <FormLabel 
                  component="legend" 
                  sx={{ 
                    mb: 2, 
                    fontSize: '1.1rem', 
                    fontWeight: 'bold',
                    color: 'text.primary'
                  }}
                >
                  {config.label}
                </FormLabel>
                
                <RadioGroup
                  value={config.value}
                  onChange={(e) => handleChange(config.id, e.target.value)}
                >
                  {config.options.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      value={option.value}
                      control={<Radio />}
                      label={option.label}
                      sx={{ mb: 0.5 }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>

              {/* 선택된 값 실시간 표시 */}
              <Box 
                sx={{ 
                  mt: 'auto',
                  pt: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minHeight: 60
                }}
              >
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  현재 선택:
                </Typography>
                {config.value ? (
                  <Chip 
                    label={getSelectedLabel(config)}
                    color="primary"
                    variant="filled"
                    size="small"
                  />
                ) : (
                  <Typography 
                    variant="body2" 
                    color="text.disabled"
                    sx={{ fontStyle: 'italic' }}
                  >
                    선택해주세요
                  </Typography>
                )}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* 전체 선택값 요약 */}
      <Paper elevation={1} sx={{ mt: 4, p: 3, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          🎯 선택 결과 요약
        </Typography>
        <Grid container spacing={2}>
          {radioConfigs.map((config) => (
            <Grid size={{ xs: 12, md: 4 }} key={config.id}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  {config.label}:
                </Typography>
                {config.value ? (
                  <Chip 
                    label={getSelectedLabel(config)}
                    size="small"
                    sx={{ 
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                      color: 'inherit'
                    }}
                  />
                ) : (
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      opacity: 0.8,
                      fontStyle: 'italic'
                    }}
                  >
                    미선택
                  </Typography>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* 기능 설명 */}
      <Box sx={{ mt: 3, p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="text.primary">
          📋 Radio Button 특징
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>단일 선택</strong>: 각 그룹에서 하나의 옵션만 선택 가능
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>상호 배타적</strong>: 다른 옵션 선택 시 이전 선택이 자동 해제
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>시각적 피드백</strong>: 선택된 그룹은 테두리 강조 표시
        </Typography>
        <Typography variant="body2">
          • <strong>진행률 표시</strong>: 전체 설정 완료 상태를 상단에 표시
        </Typography>
      </Box>
    </Box>
  );
}

export default RadioSection;