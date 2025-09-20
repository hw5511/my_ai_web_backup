/**
 * About Me 페이지 컴포넌트
 *
 * Props:
 * (페이지 컴포넌트로 props 없음)
 *
 * 상세한 자기소개 페이지
 */
import React from 'react';
import { Box, Container, Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function AboutMe() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        py: { xs: 4, md: 8 }
      }}
    >
      <Container maxWidth="md">
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

        <Card
          sx={{
            backgroundColor: '#121212',
            borderRadius: 2,
            p: { xs: 3, md: 5 },
            boxShadow: '0 8px 32px rgba(30, 215, 96, 0.1)'
          }}
        >
          <CardContent>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 4,
                textAlign: 'center',
                color: '#1ED760'
              }}
            >
              About Me
            </Typography>

            <Box
              sx={{
                backgroundColor: '#181818',
                borderRadius: 2,
                p: { xs: 3, md: 4 },
                mb: 3
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mb: 2,
                  color: '#FFFFFF'
                }}
              >
                소개
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.8,
                  color: '#B3B3B3'
                }}
              >
                About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: '#181818',
                borderRadius: 2,
                p: { xs: 3, md: 4 },
                mb: 3
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mb: 2,
                  color: '#FFFFFF'
                }}
              >
                경력 사항
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.8,
                  color: '#B3B3B3'
                }}
              >
                경력 및 경험 사항이 이곳에 표시될 예정입니다.
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: '#181818',
                borderRadius: 2,
                p: { xs: 3, md: 4 }
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mb: 2,
                  color: '#FFFFFF'
                }}
              >
                교육
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.8,
                  color: '#B3B3B3'
                }}
              >
                교육 및 자격 사항이 이곳에 표시될 예정입니다.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default AboutMe;