import { useState } from 'react';
import { Box, Typography, TextField, Grid, Paper } from '@mui/material';

/**
 * Input 섹션 컴포넌트
 * 
 * MUI TextField의 다양한 variant를 보여주는 섹션
 * - variant: standard, outlined, filled
 * - placeholder와 label 설정
 * - 입력값 실시간 표시
 */
function InputSection() {
  const [standardValue, setStandardValue] = useState('');
  const [outlinedValue, setOutlinedValue] = useState('');
  const [filledValue, setFilledValue] = useState('');

  const inputConfigs = [
    {
      variant: 'standard',
      label: 'Standard Input',
      placeholder: '표준 입력 형태입니다',
      value: standardValue,
      onChange: setStandardValue
    },
    {
      variant: 'outlined',
      label: 'Outlined Input',
      placeholder: '외곽선이 있는 입력 형태입니다',
      value: outlinedValue,
      onChange: setOutlinedValue
    },
    {
      variant: 'filled',
      label: 'Filled Input',
      placeholder: '배경이 채워진 입력 형태입니다',
      value: filledValue,
      onChange: setFilledValue
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
        Input 섹션
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 4
        }}
      >
        MUI TextField 컴포넌트의 다양한 variant와 실시간 입력값 표시
      </Typography>

      <Grid container spacing={3}>
        {inputConfigs.map((config) => (
          <Grid size={{ xs: 12, md: 4 }} key={config.variant}>
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
                  textTransform: 'capitalize',
                  color: 'primary.main'
                }}
              >
                {config.variant}
              </Typography>
              
              <TextField
                variant={config.variant}
                label={config.label}
                placeholder={config.placeholder}
                value={config.value}
                onChange={(e) => config.onChange(e.target.value)}
                fullWidth
                sx={{ mb: 2 }}
              />

              <Box 
                sx={{ 
                  mt: 'auto',
                  p: 2, 
                  bgcolor: 'grey.50', 
                  borderRadius: 1,
                  minHeight: 60
                }}
              >
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  실시간 입력값:
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontFamily: 'monospace',
                    color: config.value ? 'text.primary' : 'text.disabled'
                  }}
                >
                  {config.value || '(입력값이 없습니다)'}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* 전체 입력값 요약 */}
      <Paper elevation={1} sx={{ mt: 4, p: 3, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          전체 입력값 요약
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle2">Standard:</Typography>
            <Typography variant="body2" sx={{ fontFamily: 'monospace', opacity: 0.9 }}>
              {standardValue || '(비어있음)'}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle2">Outlined:</Typography>
            <Typography variant="body2" sx={{ fontFamily: 'monospace', opacity: 0.9 }}>
              {outlinedValue || '(비어있음)'}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle2">Filled:</Typography>
            <Typography variant="body2" sx={{ fontFamily: 'monospace', opacity: 0.9 }}>
              {filledValue || '(비어있음)'}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default InputSection;