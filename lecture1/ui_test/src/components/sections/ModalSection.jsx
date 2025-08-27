import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Grid,
  Paper,
  Chip,
  TextField,
  Alert
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

/**
 * Modal 섹션 컴포넌트
 * 
 * MUI Dialog 컴포넌트 사용
 * - 열기/닫기 버튼
 * - DialogTitle, DialogContent, DialogActions 구조
 * - 배경 클릭으로 닫기 가능
 */
function ModalSection() {
  const [openBasic, setOpenBasic] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openFullScreen, setOpenFullScreen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [lastAction, setLastAction] = useState('');

  // 모달 설정 데이터
  const modalConfigs = [
    {
      id: 'basic',
      title: '📄 기본 모달',
      buttonLabel: '기본 모달 열기',
      color: 'primary',
      icon: <InfoIcon />
    },
    {
      id: 'confirm',
      title: '⚠️ 확인 모달',
      buttonLabel: '확인 모달 열기',
      color: 'warning',
      icon: <WarningIcon />
    },
    {
      id: 'form',
      title: '📝 폼 모달',
      buttonLabel: '폼 모달 열기',
      color: 'success',
      icon: <CheckCircleIcon />
    },
    {
      id: 'fullscreen',
      title: '🖥️ 전체화면 모달',
      buttonLabel: '전체화면 모달 열기',
      color: 'secondary',
      icon: <OpenInNewIcon />
    }
  ];

  const handleOpenModal = (modalId) => {
    setLastAction(`${modalId} 모달 열기`);
    switch(modalId) {
      case 'basic':
        setOpenBasic(true);
        break;
      case 'confirm':
        setOpenConfirm(true);
        break;
      case 'form':
        setOpenForm(true);
        break;
      case 'fullscreen':
        setOpenFullScreen(true);
        break;
    }
  };

  const handleCloseModal = (modalId, action = '닫기') => {
    setLastAction(`${modalId} 모달 ${action}`);
    switch(modalId) {
      case 'basic':
        setOpenBasic(false);
        break;
      case 'confirm':
        setOpenConfirm(false);
        break;
      case 'form':
        setOpenForm(false);
        break;
      case 'fullscreen':
        setOpenFullScreen(false);
        break;
    }
  };

  const handleFormSubmit = () => {
    setLastAction(`폼 제출: ${formData.name}, ${formData.email}`);
    setFormData({ name: '', email: '' });
    setOpenForm(false);
  };

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
        Modal 섹션
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 4
        }}
      >
        MUI Dialog 컴포넌트를 사용한 다양한 모달 창 및 상호작용
      </Typography>

      {/* 마지막 액션 표시 */}
      {lastAction && (
        <Alert severity="info" sx={{ mb: 3 }}>
          마지막 액션: {lastAction}
        </Alert>
      )}

      {/* 모달 버튼들 */}
      <Grid container spacing={3}>
        {modalConfigs.map((config) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={config.id}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center'
              }}
            >
              <Box sx={{ mb: 2 }}>
                {config.icon}
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2,
                  fontSize: '1rem',
                  fontWeight: 'bold'
                }}
              >
                {config.title}
              </Typography>
              
              <Button
                variant="contained"
                color={config.color}
                onClick={() => handleOpenModal(config.id)}
                startIcon={config.icon}
                sx={{ mt: 'auto' }}
              >
                {config.buttonLabel}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* 기본 모달 */}
      <Dialog
        open={openBasic}
        onClose={() => handleCloseModal('basic')}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>📄 기본 정보 모달</DialogTitle>
        <DialogContent>
          <DialogContentText>
            이것은 기본적인 정보를 표시하는 모달입니다. 배경을 클릭하거나 
            버튼을 눌러서 닫을 수 있습니다.
          </DialogContentText>
          <Box sx={{ mt: 2 }}>
            <Chip label="MUI Dialog" color="primary" size="small" sx={{ mr: 1 }} />
            <Chip label="반응형" color="success" size="small" sx={{ mr: 1 }} />
            <Chip label="접근성" color="info" size="small" />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseModal('basic')}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>

      {/* 확인 모달 */}
      <Dialog
        open={openConfirm}
        onClose={() => handleCloseModal('confirm')}
      >
        <DialogTitle>⚠️ 작업 확인</DialogTitle>
        <DialogContent>
          <DialogContentText>
            이 작업을 정말 수행하시겠습니까? 이 작업은 되돌릴 수 없습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseModal('confirm', '취소')}>
            취소
          </Button>
          <Button 
            onClick={() => handleCloseModal('confirm', '확인')}
            variant="contained"
            color="warning"
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>

      {/* 폼 모달 */}
      <Dialog
        open={openForm}
        onClose={() => handleCloseModal('form')}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>📝 사용자 정보 입력</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            아래 정보를 입력해주세요.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="이름"
            fullWidth
            variant="outlined"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="이메일"
            type="email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseModal('form', '취소')}>
            취소
          </Button>
          <Button 
            onClick={handleFormSubmit}
            variant="contained"
            color="success"
            disabled={!formData.name || !formData.email}
          >
            저장
          </Button>
        </DialogActions>
      </Dialog>

      {/* 전체화면 모달 */}
      <Dialog
        open={openFullScreen}
        onClose={() => handleCloseModal('fullscreen')}
        fullScreen
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          🖥️ 전체화면 모달
          <Button
            onClick={() => handleCloseModal('fullscreen')}
            startIcon={<CloseIcon />}
          >
            닫기
          </Button>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h3" gutterBottom>
              전체화면 모달
            </Typography>
            <Typography variant="body1" paragraph>
              이 모달은 화면 전체를 차지합니다. 모바일에서 특히 유용합니다.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ESC 키를 누르거나 닫기 버튼을 클릭하여 닫을 수 있습니다.
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>

      {/* 기능 설명 */}
      <Box sx={{ mt: 4, p: 3, bgcolor: 'primary.light', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom color="primary.dark">
          🚪 Modal 특징
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>오버레이</strong>: 배경을 어둡게 하여 집중도 향상
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>접근성</strong>: ESC 키, 배경 클릭으로 닫기 가능
        </Typography>
        <Typography variant="body2" paragraph>
          • <strong>다양한 크기</strong>: maxWidth, fullWidth, fullScreen 옵션
        </Typography>
        <Typography variant="body2">
          • <strong>구조화</strong>: Title, Content, Actions로 명확한 레이아웃
        </Typography>
      </Box>
    </Box>
  );
}

export default ModalSection;