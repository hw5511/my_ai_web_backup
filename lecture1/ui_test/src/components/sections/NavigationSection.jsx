import { Box, Typography, Alert, Paper } from '@mui/material';
import NavigationDemo from '../ui/NavigationDemo';

/**
 * NavigationSection 컴포넌트 - 네비게이션 데모 섹션
 *
 * Flexbox를 사용한 네비게이션 바 구현을 보여주는 섹션
 */
function NavigationSection() {
  return (
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
        섹션 2: Flexbox Navigation
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 4 }}
        paragraph
      >
        Flexbox를 활용한 반응형 네비게이션 바입니다.
        로고는 왼쪽에, 메뉴는 오른쪽에 정렬되며, 메뉴 항목에 호버하면 색상이 변경됩니다.
      </Typography>

      {/* 네비게이션 데모 */}
      <Box sx={{ mb: 3 }}>
        <NavigationDemo />
      </Box>

      {/* 코드 설명 */}
      <Paper elevation={0} sx={{
        p: 3,
        bgcolor: 'grey.50',
        borderLeft: '4px solid',
        borderColor: 'primary.main',
        mt: 3
      }}>
        <Typography variant="subtitle2" fontWeight={600} gutterBottom>
          구현 특징:
        </Typography>
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li>
            <Typography variant="body2" color="text.secondary">
              display: flex와 justify-content: space-between으로 양 끝 정렬
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              align-items: center로 수직 중앙 정렬
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              메뉴 항목들은 gap 속성으로 일정한 간격 유지
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              hover 상태 관리로 인터랙티브한 UI 구현
            </Typography>
          </li>
        </Box>
      </Paper>

      <Alert severity="info" sx={{ mt: 3 }}>
        메뉴 항목을 클릭하면 콘솔에 로그가 출력됩니다. (F12 개발자 도구에서 확인)
      </Alert>
    </Box>
  );
}

export default NavigationSection;