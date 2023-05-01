import React from 'react';
import { Container, Typography, Box, ButtonBase, styled, Button, Grid } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'Spoke',
    image: '/images/Spoke_Image.png',
    url: 'https://www.spokemarketplace.com/',
    width: '100%',
  },
  {
    id: 2,
    title: 'Daphne',
    image: '/images/Daphne_Image.png',
    url: 'https://www.daphnetech.io/',
    width: '100%',
  },
  {
    id: 3,
    title: 'Sense',
    image: '/images/Sense_Image.png',
    url: 'https://www.ncr.com/banking/ncr-sense',
    width: '100%',
  },
  {
    id: 4,
    title: 'Kiplot',
    image: '/images/Kiplot_Image.png',
    url: 'https://www.kiplot.com/',
    width: '100%',
  },
  // ... more products
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));

  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

const ProductsPage = () => {
  return (
    <Container maxWidth="md"> 
        <Typography 
            color="headline" 
            variant="h3" 
            align="center" 
            gutterBottom 
            sx={{ mt: 24}}
        >
            Ed is a product business creator, technology enthusiast, and hobby coder based in the UK
        </Typography>
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                flexWrap: 'wrap', 
                minWidth: 300, 
                width: '100%', 
                mt: 24 
            }}
        >
            {products.map((product) => (
                <Box
                    component="a"
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={product.title}
                    sx={{ textDecoration: 'none' }}
                >
                    <ImageButton
                        focusRipple
                        
                        style={{
                            width: product.width,
                        }}
                    >
                    <ImageSrc style={{ backgroundImage: `url(${product.image})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                            >
                            {product.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                    </ImageButton>
                </Box>
            ))}
        </Box>
        <Box mt={24}>
            <Typography color="primary" variant="h4" align="center" sx={{maxWidth: '600px', margin: '0 auto'}}>
                Find out more about Ed and his approach to building product businesses
            </Typography>
        </Box>

        <Grid container justifyContent="center">
            <Grid item>
                <Button color="primary" variant="outlined"  component={RouterLink} to="/about" align='center' sx={{mt:8}}>
                    About Ed
                </Button>
            </Grid>
        </Grid>
    </Container>
  );
};

export default ProductsPage;