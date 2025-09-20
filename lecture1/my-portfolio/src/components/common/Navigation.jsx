/**
 * Navigation 컴포넌트
 *
 * Props:
 * (props 없음)
 *
 * 상단 네비게이션 바 - Home, About Me, Projects 탭 포함
 */
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const menuItems = [
    { label: 'Home', path: '/', icon: <HomeIcon /> },
    { label: 'About Me', path: '/about-me', icon: <PersonIcon /> },
    { label: 'Projects', path: '/projects', icon: <WorkIcon /> },
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleMenuClose();
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #282828',
        boxShadow: 'none'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#1ED760',
              cursor: 'pointer',
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              '&:hover': {
                color: '#1FDF64'
              }
            }}
            onClick={() => navigate('/')}
          >
            My Portfolio
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{
                  color: '#FFFFFF',
                  '&:hover': {
                    color: '#1ED760'
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    backgroundColor: '#121212',
                    border: '1px solid #282828',
                    mt: 1
                  }
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    sx={{
                      color: isActive(item.path) ? '#1ED760' : '#FFFFFF',
                      backgroundColor: isActive(item.path) ? '#181818' : 'transparent',
                      '&:hover': {
                        backgroundColor: '#282828',
                        color: '#1ED760'
                      },
                      py: 1.5,
                      px: 3
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {item.icon}
                      {item.label}
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  startIcon={item.icon}
                  onClick={() => navigate(item.path)}
                  sx={{
                    color: isActive(item.path) ? '#1ED760' : '#FFFFFF',
                    backgroundColor: isActive(item.path) ? 'rgba(30, 215, 96, 0.1)' : 'transparent',
                    px: 3,
                    py: 1,
                    borderRadius: '500px',
                    fontWeight: isActive(item.path) ? 700 : 500,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(30, 215, 96, 0.2)',
                      color: '#1ED760',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;