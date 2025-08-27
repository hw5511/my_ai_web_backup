/**
 * About Me 페이지 - 상세한 자기소개 페이지
 * 
 * Props: 없음
 * 
 * Example usage:
 * <AboutMe />
 */
import { Box, Container, Typography, Card, CardContent } from '@mui/material';

function AboutMe() {
  return (
    <Box sx={{ 
      width: '100%', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      py: { xs: 2, md: 4 }
    }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Card sx={{ 
          textAlign: 'center', 
          py: { xs: 4, md: 8 },
          backgroundColor: 'var(--color-bg-secondary)'
        }}>
          <CardContent>
            <Typography 
              variant="h1" 
              sx={{ 
                mb: 4,
                fontSize: { xs: '2rem', md: '3rem' },
                color: 'var(--color-text-primary)'
              }}
            >
              About Me
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
                color: 'var(--color-text-primary)',
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default AboutMe;