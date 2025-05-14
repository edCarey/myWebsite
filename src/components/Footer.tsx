import { Container, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <Container maxWidth="lg" sx={{ paddingTop: 24, paddingBottom: 2 }}>
        <Typography color="primary" variant="body1" align="center">
          © {new Date().getFullYear()} Ed Carey. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
