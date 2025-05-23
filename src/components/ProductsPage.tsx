import {
  Box,
  Button,
  ButtonBase,
  Container,
  styled,
  Theme,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  image: string;
  url: string;
  width: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Aiir",
    image: "/images/Aiir_page.png",
    url: "https://useaiir.com/",
    width: "100%",
  },
  {
    id: 2,
    title: "Daphne",
    image: "/images/Daphne_Image.png",
    url: "https://www.getdaphne.com/",
    width: "100%",
  },
  {
    id: 3,
    title: "Spoke",
    image: "/images/Spoke_Image.png",
    url: "https://www.fintechfutures.com/open-banking/enterprise-tech-provider-ncr-buys-open-banking-ip-from-uk-fintech-spoke",
    width: "100%",
  },
  {
    id: 4,
    title: "Sense",
    image: "/images/Sense_Image.png",
    url: "https://www.ncr.com/banking/ncr-sense",
    width: "100%",
  },
  {
    id: 5,
    title: "Sense - E20",
    image: "/images/E20.png",
    url: "https://www.emiratesnbd.com/en/e20",
    width: "100%",
  },
  {
    id: 6,
    title: "Sense - FAB KSA Mobile",
    image: "/images/FAB_Mobile.png",
    url: "https://www.bankfab.com/en-sa/personal/mobile-app",
    width: "100%",
  },
  {
    id: 7,
    title: "Kiplot",
    image: "/images/Kiplot_Image.png",
    url: "https://www.kiplot.com/",
    width: "100%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }: { theme: Theme }) => ({
  position: "relative",
  height: 200,
  display: "block",
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }: { theme: Theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }: { theme: Theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }: { theme: Theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ProductsPage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography
        color="headline"
        variant="h3"
        align="center"
        gutterBottom
        sx={{ mt: 24 }}
      >
        Ed is a UK-based product builder, AI enthusiast, and hobby coder.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 8 }}>
        <Button
          color="primary"
          variant="outlined"
          component={RouterLink}
          to="/chat"
        >
          Chat with Ed
        </Button>
      </Box>
      <Typography
        color="primary"
        variant="h5"
        align="center"
        gutterBottom
        sx={{ mt: 24 }}
      >
        Product businesses created
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
          mt: 4,
        }}
      >
        {products.map((product) => (
          <Box
            component="a"
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            key={product.title}
            sx={{ textDecoration: "none" }}
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
                    position: "relative",
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
      <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <Button
          color="primary"
          variant="outlined"
          onClick={scrollToTop}
          component={RouterLink}
          to="/about"
        >
          Learn more about Ed
        </Button>
      </Box>
    </Container>
  );
};

export default ProductsPage;
