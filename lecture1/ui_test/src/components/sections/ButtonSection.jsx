import { Box, Typography, Button, Grid } from '@mui/material';

/**
 * Button 섹션 컴포넌트
 * 
 * MUI Button의 다양한 variant와 color 조합을 보여주는 섹션
 * - variant: contained, outlined, text
 * - color: primary, secondary, error
 * - 클릭 시 알림창 표시
 */
function ButtonSection() {
  const handleButtonClick = (variant, color) => {
    alert(`${variant} ${color} 버튼이 클릭되었습니다!`);
  };

  const variants = ['contained', 'outlined', 'text'];
  const colors = ['primary', 'secondary', 'error'];

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
        Button 섹션
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 4
        }}
      >
        MUI Button 컴포넌트의 다양한 variant와 color 조합
      </Typography>

      {variants.map((variant) => (
        <Box key={variant} sx={{ mb: 4 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 2, 
              textAlign: 'center',
              textTransform: 'capitalize'
            }}
          >
            {variant} Variant
          </Typography>
          
          <Grid container spacing={2} justifyContent="center">
            {colors.map((color) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={color}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant={variant}
                    color={color}
                    onClick={() => handleButtonClick(variant, color)}
                    sx={{
                      minWidth: 120,
                      textTransform: 'capitalize'
                    }}
                  >
                    {color}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

export default ButtonSection;