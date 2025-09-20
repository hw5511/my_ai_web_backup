/**
 * Projects 페이지 컴포넌트
 *
 * Props:
 * (페이지 컴포넌트로 props 없음)
 *
 * 포트폴리오 작품들을 보여주는 페이지
 */
import React from 'react';
import { Box, Container, Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Projects() {
  const navigate = useNavigate();

  // 임시 프로젝트 데이터
  const projects = [
    { id: 1, title: '프로젝트 1', description: '첫 번째 프로젝트 설명' },
    { id: 2, title: '프로젝트 2', description: '두 번째 프로젝트 설명' },
    { id: 3, title: '프로젝트 3', description: '세 번째 프로젝트 설명' },
    { id: 4, title: '프로젝트 4', description: '네 번째 프로젝트 설명' },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#000000',
        py: { xs: 4, md: 8 }
      }}
    >
      <Container maxWidth="lg">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{
            mb: 4,
            color: '#B3B3B3',
            '&:hover': {
              color: '#1ED760',
              backgroundColor: 'transparent'
            }
          }}
        >
          홈으로 돌아가기
        </Button>

        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 2,
            textAlign: 'center',
            color: '#1ED760'
          }}
        >
          Projects
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            mb: 6,
            textAlign: 'center',
            color: '#B3B3B3'
          }}
        >
          Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다.
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid key={project.id} size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: '#121212',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  border: '1px solid transparent',
                  '&:hover': {
                    backgroundColor: '#181818',
                    borderColor: '#1ED760',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 32px rgba(30, 215, 96, 0.2)'
                  }
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      mb: 2,
                      color: '#FFFFFF'
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '0.95rem', md: '1.1rem' },
                      mb: 3,
                      color: '#B3B3B3'
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: '#282828',
                      borderRadius: 1,
                      p: 2,
                      mb: 3
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#6A6A6A',
                        textAlign: 'center'
                      }}
                    >
                      프로젝트 이미지 공간
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      py: 1.5
                    }}
                  >
                    자세히 보기
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 6,
            p: 4,
            backgroundColor: '#121212',
            borderRadius: 2,
            textAlign: 'center',
            border: '2px solid #282828'
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              color: '#FFFFFF'
            }}
          >
            더 많은 프로젝트
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#B3B3B3'
            }}
          >
            추가 프로젝트들이 계속 업데이트될 예정입니다.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;