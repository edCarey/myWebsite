import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#F6F5F4'}}>
      <Toolbar>
        <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          {/* <img
            alt="EC"
            src="/images/EC Logo.png"
            style={{ marginRight: '8px', height: 'auto', maxHeight: '40px' }} // Adjust the styles as needed
          /> */}
          <Typography color="#464545" variant="h6" component="div">
            Ed Carey
          </Typography>
        </RouterLink>
        <div style={{ flexGrow: 1 }}></div>
        <Button color="primary" component={Link} to="/">
          Blog
        </Button>
        <Button color="primary" component={Link} to="/about">
          About
        </Button>
        <Button color="primary" component={Link} to="/products">
          Products
        </Button>
        <Button color="primary" component={Link} to="/cv">
          CV
        </Button>  
      </Toolbar>
    </AppBar>
  );
};


export default Header;
