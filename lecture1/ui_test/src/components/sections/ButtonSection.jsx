import { Box, Typography, Alert, Snackbar } from '@mui/material';
import { useState } from 'react';
import ButtonDemo from '../ui/ButtonDemo';

/**
 * ButtonSection 컴포넌트 - 버튼 데모 섹션
 *
 * MUI Button의 다양한 variant와 color 조합을 보여주는 섹션
 */
function ButtonSection() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: ''
  });

  const variants = ['contained', 'outlined', 'text'];
  const colors = ['primary', 'secondary', 'error'];

  const handleClick = (variant, color) => {
    setSnackbar({
      open: true,
      message: `${variant} ${color} 버튼이 클릭되었습니다!`
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      open: false,
      message: ''
    });
  };

  return (
    <>
      <Box component="section" sx={{
        p: 4,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 2,
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: 3
        }
      }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            mb: 2,
            fontWeight: 600,
            color: 'primary.main'
          }}
        >
          섹션 1: Button 컴포넌트
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mb: 4 }}
          paragraph
        >
          MUI Button 컴포넌트의 다양한 variant(contained, outlined, text)와
          color(primary, secondary, error) 조합을 확인할 수 있습니다.
        </Typography>

        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3
        }}>
          {variants.map((variant) => (
            <Box
              key={variant}
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 30%' },
                p: 2,
                bgcolor: 'background.default',
                borderRadius: 1,
                minHeight: 150
              }}
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  textTransform: 'capitalize'
                }}
              >
                {variant} Variant
              </Typography>

              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                alignItems: 'flex-start'
              }}>
                {colors.map((color) => (
                  <ButtonDemo
                    key={`${variant}-${color}`}
                    variant={variant}
                    color={color}
                    label={`${color}`}
                    onClick={() => handleClick(variant, color)}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Alert severity="info" sx={{ mt: 3 }}>
          버튼을 클릭하면 알림이 표시됩니다.
        </Alert>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default ButtonSection;