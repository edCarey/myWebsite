import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#F6F5F4'}}>
      <Toolbar>
        <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Typography color="primary" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ed Carey
          </Typography>
        </RouterLink>
        <div style={{ flexGrow: 1 }}></div>
        <Button color="primary" component={Link} to="/">
          Products
        </Button>
        <Button color="primary" component={Link} to="/about">
          About
        </Button>
        <Button color="primary" component={Link} to="/blog">
          Blog
        </Button>
        <Button color="primary" component={Link} to="/cv">
          CV
        </Button>  
      </Toolbar>
    </AppBar>
  );
};


export default Header;
