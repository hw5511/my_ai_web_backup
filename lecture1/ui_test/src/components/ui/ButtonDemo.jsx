import { Button } from '@mui/material';

/**
 * ButtonDemo 컴포넌트 - MUI Button 데모
 *
 * Props:
 * @param {string} variant - 버튼 스타일 타입 [Required]
 * @param {string} color - 버튼 색상 [Required]
 * @param {string} label - 버튼 텍스트 [Required]
 * @param {function} onClick - 클릭 이벤트 핸들러 [Required]
 *
 * Example usage:
 * <ButtonDemo variant="contained" color="primary" label="Click me" onClick={handleClick} />
 */
function ButtonDemo({ variant, color, label, onClick }) {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{
        minWidth: 120,
        m: 0.5
      }}
    >
      {label}
    </Button>
  );
}

export default ButtonDemo;