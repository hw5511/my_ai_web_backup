import { Box, Typography } from '@mui/material';
import { useState } from 'react';

/**
 * NavigationDemo 컴포넌트 - Flexbox를 사용한 네비게이션 바
 *
 * Flexbox를 활용하여 로고와 메뉴를 양 끝에 정렬한 네비게이션
 */
function NavigationDemo() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const menuItems = ['홈', '소개', '상품', '연락처', '설정'];

  const handleMenuClick = (item) => {
    console.log(`${item} 클릭됨`);
  };

  return (
    <Box
      component="nav"
      sx={{
        width: '100%',
        height: '60px',
        backgroundColor: '#2d3748',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px',
        borderRadius: 1,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      {/* 로고 박스 (왼쪽) */}
      <Box>
        <Typography
          sx={{
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            '&:hover': {
              opacity: 0.9
            }
          }}
        >
          MyWebsite
        </Typography>
      </Box>

      {/* 메뉴들 박스 (오른쪽) */}
      <Box
        sx={{
          display: 'flex',
          gap: '15px',
          alignItems: 'center'
        }}
      >
        {menuItems.map((item, index) => (
          <Typography
            key={index}
            onClick={() => handleMenuClick(item)}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
            sx={{
              color: hoveredItem === index ? 'white' : '#9ca3af',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
              userSelect: 'none',
              '&:hover': {
                color: 'white'
              }
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default NavigationDemo;