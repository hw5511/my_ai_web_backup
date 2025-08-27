import { useState } from 'react';
import { 
  Box, 
  Typography, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  Grid,
  Paper,
  Chip
} from '@mui/material';

/**
 * Dropdown 섹션 컴포넌트
 * 
 * MUI Select와 MenuItem을 사용한 드롭다운 메뉴
 * - FormControl과 InputLabel 적용
 * - 3-5개 옵션 제공
 * - 선택값 실시간 표시
 */
function DropdownSection() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // 드롭다운 옵션 데이터
  const dropdownConfigs = [
    {
      id: 'country',
      label: '국가 선택',
      value: selectedCountry,
      onChange: setSelectedCountry,
      options: [
        { value: 'korea', label: '🇰🇷 대한민국' },
        { value: 'usa', label: '🇺🇸 미국' },
        { value: 'japan', label: '🇯🇵 일본' },
        { value: 'china', label: '🇨🇳 중국' },
        { value: 'germany', label: '🇩🇪 독일' }
      ]
    },
    {
      id: 'language',
      label: '프로그래밍 언어',
      value: selectedLanguage,
      onChange: setSelectedLanguage,
      options: [
        { value: 'javascript', label: 'JavaScript' },
        { value: 'python', label: 'Python' },
        { value: 'java', label: 'Java' },
        { value: 'typescript', label: 'TypeScript' }
      ]
    },
    {
      id: 'category',
      label: '카테고리',
      value: selectedCategory,
      onChange: setSelectedCategory,
      options: [
        { value: 'frontend', label: '프론트엔드' },
        { value: 'backend', label: '백엔드' },
        { value: 'mobile', label: '모바일' },
        { value: 'ai', label: '인공지능' },
        { value: 'devops', label: 'DevOps' }
      ]
    }
  ];

  const handleChange = (configId, value) => {
    const config = dropdownConfigs.find(c => c.id === configId);
    if (config) {
      config.onChange(value);
    }
  };

  const getSelectedLabel = (config) => {
    const selectedOption = config.options.find(option => option.value === config.value);
    return selectedOption ? selectedOption.label : '선택되지 않음';
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
        Dropdown 섹션
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 4
        }}
      >
        MUI Select와 MenuItem을 사용한 드롭다운 메뉴 및 실시간 선택값 표시
      </Typography>

      {/* 드롭다운들 */}
      <Grid container spacing={3}>
        {dropdownConfigs.map((config) => (
          <Grid size={{ xs: 12, md: 4 }} key={config.id}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2, 
                  textAlign: 'center',
                  color: 'primary.main'
                }}
              >
                {config.label}
              </Typography>
              
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id={`${config.id}-label`}>
                  {config.label}
                </InputLabel>
                <Select
                  labelId={`${config.id}-label`}
                  id={`${config.id}-select`}
                  value={config.value}
                  label={config.label}
                  onChange={(e) => handleChange(config.id, e.target.value)}
                >
                  {config.options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* 선택값 실시간 표시 */}
              <Box 
                sx={{ 
                  mt: 'auto',
                  p: 2, 
                  bgcolor: 'grey.50', 
                  borderRadius: 1,
                  minHeight: 80,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  선택된 값:
                </Typography>
                {config.value ? (
                  <Chip 
                    label={getSelectedLabel(config)}
                    color="primary"
                    variant="filled"
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
      <Paper elevation={1} sx={{ mt: 4, p: 3, bgcolor: 'success.main', color: 'success.contrastText' }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          선택 결과 요약
        </Typography>
        <Grid container spacing={2}>
          {dropdownConfigs.map((config) => (
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
      <Box sx={{ mt: 3, p: 3, bgcolor: 'info.light', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="info.dark">
          기능 설명
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>FormControl & InputLabel</strong>: 접근성과 사용성을 위한 라벨 제공
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>실시간 표시</strong>: 선택 즉시 Chip 컴포넌트로 시각적 피드백
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>다양한 옵션</strong>: 국가(이모지), 프로그래밍 언어, 카테고리 선택
        </Typography>
        <Typography variant="body2">
          • <strong>종합 요약</strong>: 모든 선택값을 한 눈에 확인할 수 있는 요약 섹션
        </Typography>
      </Box>
    </Box>
  );
}

export default DropdownSection;