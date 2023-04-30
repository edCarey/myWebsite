import React from 'react';
import { Typography, Grid, Avatar, IconButton, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ProductsPage = () => {
    return (
        <Container maxWidth="md"> 
            <Typography color="headline" variant="h4" align="center" gutterBottom sx={{ mt: 8}}>
                About Ed
            </Typography>
        </Container>
    )
}

export default ProductsPage;