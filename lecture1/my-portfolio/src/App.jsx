import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';

// 페이지 컴포넌트
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

// 공통 컴포넌트
import Navigation from './components/common/Navigation';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navigation />
        {/* AppBar 높이만큼 여백 추가 */}
        <Toolbar sx={{ minHeight: { xs: '56px', sm: '64px' } }} />

        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;