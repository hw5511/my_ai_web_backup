/**
 * Projects 페이지 - 포트폴리오 작품들을 보여주는 페이지
 * 
 * Props: 없음
 * 
 * Example usage:
 * <Projects />
 */
import { Box, Container, Typography, Card, CardContent } from '@mui/material';

function Projects() {
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
              Projects
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
              Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Projects;