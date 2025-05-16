import { Container, Typography } from "@mui/material";
import React from "react";
import theme from "../theme";

const Footer: React.FC = () => {
  return (
    <footer>
      <Container
        sx={{
          backgroundColor: theme.globals.backgroundColor,
          minWidth: "100vw",
          paddingTop: 16,
          paddingBottom: 2,
        }}
      >
        <Typography color="primary" variant="body1" align="center">
          © {new Date().getFullYear()} Ed Carey. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
