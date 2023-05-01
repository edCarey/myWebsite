import React from 'react';
import { Typography, Grid, Card, CardContent, Container } from '@mui/material';

const BlogPage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" align='center' gutterBottom sx={{mt:24}}>
        Blog
      </Typography>
      <Grid container spacing={4} sx={{mt: 24}} >
        <Grid item xs={12} md={12}>
            <Card>
                <CardContent>
                <Typography variant="h6" gutterBottom>
                    Blog Post Title
                </Typography>
                <Typography variant="subtitle1">
                    Posted on April 30, 2023
                </Typography>
                <Typography variant="body2">
                    A brief summary or introduction to your blog post...
                </Typography>
                </CardContent>
            </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
