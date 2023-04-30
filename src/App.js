import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './components/Header';
import CVPage from './components/CVPage';
import BlogPage from './components/BlogPage';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ProductsPage from './components/ProductsPage';
import { Box } from '@mui/system';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Box
          sx={{
            backgroundColor: theme.globals.backgroundColor,
            minHeight: '100vh',
            paddingTop: theme.spacing(2),
          }}
        >
          <Routes>
            <Route path="/" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cv" element={<CVPage />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
