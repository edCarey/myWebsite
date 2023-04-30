import React from 'react';
import { Typography, Grid, Card, CardContent, Container } from '@mui/material';

const CVPage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align='center' gutterBottom sx={{mt:4}}>
        CV
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
            <Card>
                <CardContent>
                <Typography variant="h6" gutterBottom>
                    Experience 1
                </Typography>
                <Typography variant="subtitle1">
                    Company 1
                </Typography>
                <Typography variant="body2">
                    Description of your experience at Company 1.
                </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} md={12}>
            <Card>
                <CardContent>
                <Typography variant="h6" gutterBottom>
                    Experience 2
                </Typography>
                <Typography variant="subtitle1">
                    Company 2
                </Typography>
                <Typography variant="body2">
                    Description of your experience at Company 2.
                </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} md={12}>
            <Card>
                <CardContent>
                <Typography variant="h6" gutterBottom>
                    Experience 3
                </Typography>
                <Typography variant="subtitle1">
                    Company 3
                </Typography>
                <Typography variant="body2">
                    Description of your experience at Company 3.
                </Typography>
                </CardContent>
            </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CVPage;
