/**
 * Home 페이지 - 5개 섹션으로 구성된 메인 페이지
 * 
 * Props: 없음
 * 
 * Example usage:
 * <Home />
 */
import { Box, Container, Typography, Card, CardContent, Button, Grid } from '@mui/material';

function Home() {
  return (
    <Box sx={{ 
      width: '100%', 
      minHeight: '100vh',
      py: { xs: 2, md: 4 }
    }}>
      {/* Hero 섹션 */}
      <Box sx={{
        backgroundColor: 'var(--color-bg-primary)',
        py: { xs: 6, md: 10 },
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Typography 
            variant="h1" 
            sx={{ 
              mb: 2,
              color: 'var(--color-text-primary)',
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700
            }}
          >
            포트폴리오
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              color: 'var(--color-text-primary)',
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
          </Typography>
        </Container>
      </Box>

      {/* About Me 섹션 */}
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Card sx={{ textAlign: 'center', py: 4 }}>
            <CardContent>
              <Typography variant="h2" sx={{ mb: 3 }}>
                About Me
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
                여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
              </Typography>
              <Button 
                variant="contained"
                sx={{
                  backgroundColor: 'var(--color-button-primary)',
                  '&:hover': {
                    backgroundColor: 'var(--color-button-hover)',
                  },
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem'
                }}
              >
                더 알아보기
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Skill Tree 섹션 */}
      <Box sx={{ 
        backgroundColor: 'var(--color-bg-secondary)', 
        py: { xs: 4, md: 8 } 
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 4 }}>
            Skill Tree
          </Typography>
          <Card sx={{ textAlign: 'center', py: 4 }}>
            <CardContent>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Projects 섹션 */}
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 4 }}>
            Projects
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12 }}>
              <Card sx={{ textAlign: 'center', py: 4 }}>
                <CardContent>
                  <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
                    여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.
                  </Typography>
                  <Button 
                    variant="contained"
                    sx={{
                      backgroundColor: 'var(--color-button-primary)',
                      '&:hover': {
                        backgroundColor: 'var(--color-button-hover)',
                      },
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem'
                    }}
                  >
                    더 보기
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact 섹션 */}
      <Box sx={{ 
        backgroundColor: 'var(--color-bg-secondary)', 
        py: { xs: 4, md: 8 } 
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 4 }}>
            Contact
          </Typography>
          <Card sx={{ textAlign: 'center', py: 4 }}>
            <CardContent>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
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