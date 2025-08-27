import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  Grid,
  Paper,
  Chip,
  Button,
  Divider
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

/**
 * Checkbox 섹션 컴포넌트
 * 
 * MUI Checkbox와 FormControlLabel을 사용한 체크박스
 * - 3-4개 체크박스 옵션
 * - 체크된 항목들 실시간 표시
 * - 전체 선택/해제 기능
 */
function CheckboxSection() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  // 체크박스 옵션 데이터
  const skillOptions = [
    { id: 'react', label: 'React', icon: '⚛️' },
    { id: 'nodejs', label: 'Node.js', icon: '💚' },
    { id: 'python', label: 'Python', icon: '🐍' },
    { id: 'typescript', label: 'TypeScript', icon: '📘' }
  ];

  const hobbyOptions = [
    { id: 'reading', label: '독서', icon: '📚' },
    { id: 'gaming', label: '게임', icon: '🎮' },
    { id: 'music', label: '음악감상', icon: '🎵' },
    { id: 'sports', label: '운동', icon: '⚽' }
  ];

  // 개별 체크박스 핸들러
  const handleSkillChange = (skillId) => {
    setSelectedSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleHobbyChange = (hobbyId) => {
    setSelectedHobbies(prev => 
      prev.includes(hobbyId) 
        ? prev.filter(id => id !== hobbyId)
        : [...prev, hobbyId]
    );
  };

  // 전체 선택/해제 핸들러
  const handleSelectAllSkills = () => {
    if (selectedSkills.length === skillOptions.length) {
      setSelectedSkills([]); // 전체 해제
    } else {
      setSelectedSkills(skillOptions.map(skill => skill.id)); // 전체 선택
    }
  };

  const handleSelectAllHobbies = () => {
    if (selectedHobbies.length === hobbyOptions.length) {
      setSelectedHobbies([]); // 전체 해제
    } else {
      setSelectedHobbies(hobbyOptions.map(hobby => hobby.id)); // 전체 선택
    }
  };

  // 전체 선택 상태 계산
  const getSelectAllState = (selected, total) => {
    if (selected.length === 0) return false;
    if (selected.length === total) return true;
    return 'indeterminate';
  };

  const getSelectedLabels = (selectedIds, options) => {
    return selectedIds.map(id => {
      const option = options.find(opt => opt.id === id);
      return option ? `${option.icon} ${option.label}` : '';
    });
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
        Checkbox 섹션
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          mb: 4
        }}
      >
        MUI Checkbox와 FormControlLabel을 사용한 다중 선택 및 전체 선택 기능
      </Typography>

      <Grid container spacing={3}>
        {/* 기술 스택 체크박스 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <FormControl component="fieldset" sx={{ width: '100%' }}>
              <FormLabel component="legend" sx={{ mb: 2, fontSize: '1.1rem', fontWeight: 'bold' }}>
                💻 보유 기술 스택
              </FormLabel>
              
              {/* 전체 선택 체크박스 */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={getSelectAllState(selectedSkills, skillOptions.length) === true}
                    indeterminate={getSelectAllState(selectedSkills, skillOptions.length) === 'indeterminate'}
                    onChange={handleSelectAllSkills}
                    icon={<CheckBoxOutlineBlankIcon />}
                    checkedIcon={<CheckBoxIcon />}
                    indeterminateIcon={<IndeterminateCheckBoxIcon />}
                  />
                }
                label={<Typography fontWeight="bold">전체 선택</Typography>}
                sx={{ mb: 1 }}
              />
              
              <Divider sx={{ mb: 2 }} />
              
              <FormGroup>
                {skillOptions.map((skill) => (
                  <FormControlLabel
                    key={skill.id}
                    control={
                      <Checkbox
                        checked={selectedSkills.includes(skill.id)}
                        onChange={() => handleSkillChange(skill.id)}
                      />
                    }
                    label={`${skill.icon} ${skill.label}`}
                  />
                ))}
              </FormGroup>
            </FormControl>

            {/* 선택된 기술 실시간 표시 */}
            <Box sx={{ mt: 3, p: 2, bgcolor: 'primary.light', borderRadius: 1 }}>
              <Typography variant="subtitle2" color="primary.contrastText" gutterBottom>
                선택된 기술 ({selectedSkills.length}개):
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {selectedSkills.length > 0 ? (
                  getSelectedLabels(selectedSkills, skillOptions).map((label, index) => (
                    <Chip 
                      key={index}
                      label={label}
                      size="small"
                      sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', color: 'primary.contrastText' }}
                    />
                  ))
                ) : (
                  <Typography variant="body2" sx={{ color: 'primary.contrastText', opacity: 0.8 }}>
                    선택된 기술이 없습니다
                  </Typography>
                )}
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* 취미 체크박스 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <FormControl component="fieldset" sx={{ width: '100%' }}>
              <FormLabel component="legend" sx={{ mb: 2, fontSize: '1.1rem', fontWeight: 'bold' }}>
                🎯 관심 취미
              </FormLabel>
              
              {/* 전체 선택 체크박스 */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={getSelectAllState(selectedHobbies, hobbyOptions.length) === true}
                    indeterminate={getSelectAllState(selectedHobbies, hobbyOptions.length) === 'indeterminate'}
                    onChange={handleSelectAllHobbies}
                    icon={<CheckBoxOutlineBlankIcon />}
                    checkedIcon={<CheckBoxIcon />}
                    indeterminateIcon={<IndeterminateCheckBoxIcon />}
                  />
                }
                label={<Typography fontWeight="bold">전체 선택</Typography>}
                sx={{ mb: 1 }}
              />
              
              <Divider sx={{ mb: 2 }} />
              
              <FormGroup>
                {hobbyOptions.map((hobby) => (
                  <FormControlLabel
                    key={hobby.id}
                    control={
                      <Checkbox
                        checked={selectedHobbies.includes(hobby.id)}
                        onChange={() => handleHobbyChange(hobby.id)}
                      />
                    }
                    label={`${hobby.icon} ${hobby.label}`}
                  />
                ))}
              </FormGroup>
            </FormControl>

            {/* 선택된 취미 실시간 표시 */}
            <Box sx={{ mt: 3, p: 2, bgcolor: 'secondary.light', borderRadius: 1 }}>
              <Typography variant="subtitle2" color="secondary.contrastText" gutterBottom>
                선택된 취미 ({selectedHobbies.length}개):
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {selectedHobbies.length > 0 ? (
                  getSelectedLabels(selectedHobbies, hobbyOptions).map((label, index) => (
                    <Chip 
                      key={index}
                      label={label}
                      size="small"
                      sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', color: 'secondary.contrastText' }}
                    />
                  ))
                ) : (
                  <Typography variant="body2" sx={{ color: 'secondary.contrastText', opacity: 0.8 }}>
                    선택된 취미가 없습니다
                  </Typography>
                )}
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* 전체 선택 결과 요약 */}
      <Paper elevation={1} sx={{ mt: 4, p: 3, bgcolor: 'warning.main', color: 'warning.contrastText' }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
          📊 선택 결과 종합
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom>
              💻 기술 스택 ({selectedSkills.length}/{skillOptions.length}):
            </Typography>
            <Typography variant="body2">
              {selectedSkills.length > 0 
                ? getSelectedLabels(selectedSkills, skillOptions).join(', ')
                : '선택된 기술이 없습니다'
              }
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle2" gutterBottom>
              🎯 취미 ({selectedHobbies.length}/{hobbyOptions.length}):
            </Typography>
            <Typography variant="body2">
              {selectedHobbies.length > 0 
                ? getSelectedLabels(selectedHobbies, hobbyOptions).join(', ')
                : '선택된 취미가 없습니다'
              }
            </Typography>
          </Grid>
        </Grid>

        {/* 빠른 액션 버튼들 */}
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button 
            variant="outlined" 
            size="small"
            onClick={handleSelectAllSkills}
            sx={{ color: 'warning.contrastText', borderColor: 'warning.contrastText' }}
          >
            기술 전체 토글
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            onClick={handleSelectAllHobbies}
            sx={{ color: 'warning.contrastText', borderColor: 'warning.contrastText' }}
          >
            취미 전체 토글
          </Button>
          <Button 
            variant="outlined" 
            size="small"
            onClick={() => {
              setSelectedSkills([]);
              setSelectedHobbies([]);
            }}
            sx={{ color: 'warning.contrastText', borderColor: 'warning.contrastText' }}
          >
            전체 초기화
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default CheckboxSection;