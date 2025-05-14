import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const BlogPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom sx={{ mt: 24 }}>
        Blog
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <Button
          color="primary"
          variant="outlined"
          href="https://medium.com/@ed_ecarey23"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My Medium Blog
        </Button>
      </Box>
    </Container>
  );
};

export default BlogPage;
