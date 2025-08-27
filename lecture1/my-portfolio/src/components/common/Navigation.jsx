/**
 * Navigation 컴포넌트 - 메인 네비게이션 바
 * 
 * Props: 없음
 * 
 * Example usage:
 * <Navigation />
 */
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About Me', path: '/about' },
    { label: 'Projects', path: '/projects' },
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'var(--color-bg-secondary)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navigationItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color: location.pathname === item.path 
                  ? 'var(--color-accent)' 
                  : 'var(--color-text-primary)',
                fontWeight: location.pathname === item.path ? 600 : 500,
                fontSize: { xs: '0.9rem', md: '1rem' },
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(75, 175, 80, 0.1)',
                  color: 'var(--color-accent)',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;