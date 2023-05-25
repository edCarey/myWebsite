import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#F6F5F4'}}>
      <Toolbar>
        <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image>
            
          </Image>
        </RouterLink>
        <div style={{ flexGrow: 1 }}></div>
        <Button color="primary" onClick={scrollToTop} component={Link} to="/">
          Products
        </Button>
        <Button color="primary" onClick={scrollToTop} component={Link} to="/about">
          About
        </Button>
        <Button color="primary" onClick={scrollToTop} component={Link} to="/blog">
          Blog
        </Button>
        <Button color="primary" onClick={scrollToTop} component={Link} to="/cv">
          CV
        </Button>  
      </Toolbar>
    </AppBar>
  );
};


export default Header;
