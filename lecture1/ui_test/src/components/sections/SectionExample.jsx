import { Box, Typography } from '@mui/material';

/**
 * 섹션 예시 컴포넌트
 *
 * Props:
 * @param {string} title - 섹션 제목 [Required]
 * @param {string} description - 섹션 설명 [Required]
 * @param {React.ReactNode} children - 섹션 내용 [Required]
 *
 * Example usage:
 * <SectionExample title="섹션 1" description="설명">
 *   <YourComponent />
 * </SectionExample>
 */
function SectionExample({ title, description, children }) {
  return (
    <Box component="section" sx={{
      p: 4,
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: 2,
      '&:hover': {
        boxShadow: 3
      },
      transition: 'box-shadow 0.3s ease'
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
        {title}
      </Typography>

      {description && (
        <Typography
          color="text.secondary"
          sx={{ mb: 3 }}
          paragraph
        >
          {description}
        </Typography>
      )}

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
        {children}
      </Box>
    </Box>
  );
}

export default SectionExample;