/**
 * Home 페이지 컴포넌트
 *
 * Props:
 * (페이지 컴포넌트로 props 없음)
 *
 * 5개 섹션으로 구성: Hero, About Me, Skill Tree, Projects, Contact
 */
import React from 'react';
import { Box, Container, Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      {/* Hero 섹션 */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(180deg, #000000 0%, #121212 100%)',
          py: { xs: 4, md: 8 }
        }}
      >
        <Container maxWidth="lg">
          <Card
            sx={{
              backgroundColor: 'transparent',
              border: '2px solid #282828',
              borderRadius: 2,
              p: { xs: 2, md: 4 }
            }}
          >
            <CardContent>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  mb: 3,
                  textAlign: 'center',
                  color: '#1ED760'
                }}
              >
                Hero 섹션
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  textAlign: 'center',
                  color: '#B3B3B3'
                }}
              >
                여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* About Me 섹션 */}
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#121212',
          py: { xs: 6, md: 10 }
        }}
      >
        <Container maxWidth="lg">
          <Card
            sx={{
              backgroundColor: '#181818',
              borderRadius: 2,
              p: { xs: 2, md: 4 },
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#282828',
              }
            }}
          >
            <CardContent>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  mb: 3,
                  textAlign: 'center',
                  color: '#FFFFFF'
                }}
              >
                About Me
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  textAlign: 'center',
                  color: '#B3B3B3',
                  mb: 4
                }}
              >
                여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate('/about-me')}
                  sx={{
                    px: { xs: 3, md: 4 },
                    py: 1.5
                  }}
                >
                  더 알아보기
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Skill Tree 섹션 */}
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000000',
          py: { xs: 6, md: 10 }
        }}
      >
        <Container maxWidth="lg">
          <Card
            sx={{
              backgroundColor: '#121212',
              border: '1px solid #282828',
              borderRadius: 2,
              p: { xs: 2, md: 4 }
            }}
          >
            <CardContent>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  mb: 3,
                  textAlign: 'center',
                  color: '#1ED760'
                }}
              >
                Skill Tree
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  textAlign: 'center',
                  color: '#B3B3B3'
                }}
              >
                여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Projects 섹션 */}
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#121212',
          py: { xs: 6, md: 10 }
        }}
      >
        <Container maxWidth="lg">
          <Card
            sx={{
              backgroundColor: '#181818',
              borderRadius: 2,
              p: { xs: 2, md: 4 },
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#282828',
              }
            }}
          >
            <CardContent>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  mb: 3,
                  textAlign: 'center',
                  color: '#FFFFFF'
                }}
              >
                Projects
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  textAlign: 'center',
                  color: '#B3B3B3',
                  mb: 4
                }}
              >
                여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => navigate('/projects')}
                  sx={{
                    px: { xs: 3, md: 4 },
                    py: 1.5,
                    borderColor: '#FFFFFF',
                    color: '#FFFFFF',
                    '&:hover': {
                      borderColor: '#1ED760',
                      color: '#1ED760',
                    }
                  }}
                >
                  더 보기
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Contact 섹션 */}
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000000',
          borderTop: '1px solid #282828',
          py: { xs: 6, md: 10 }
        }}
      >
        <Container maxWidth="lg">
          <Card
            sx={{
              backgroundColor: 'transparent',
              border: '2px solid #1ED760',
              borderRadius: 2,
              p: { xs: 2, md: 4 }
            }}
          >
            <CardContent>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  mb: 3,
                  textAlign: 'center',
                  color: '#1ED760'
                }}
              >
                Contact
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  textAlign: 'center',
                  color: '#B3B3B3'
                }}
              >
                여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;