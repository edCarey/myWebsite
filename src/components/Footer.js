import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 2 }}>
        <Typography color="primary" variant="body1" align="center">
          © {new Date().getFullYear()} Ed Carey. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
