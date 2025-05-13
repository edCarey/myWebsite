import { Box, Container, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const ImageContainer = styled(Box)({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  cursor: "pointer",
});

const OverlayText = styled(Typography)({
  position: "absolute",
  zIndex: 1,
  color: "#464545",
});

const CVPage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom sx={{ mt: 24 }}>
        CV
      </Typography>
      <ImageContainer sx={{ mt: 24 }}>
        <OverlayText variant="h5">View as PDF</OverlayText>
        <Link
          href="https://drive.google.com/file/d/1mLYjEE94K7fuOfA8KZfTfcWpAsVAEgTY/view?usp=sharing"
          download
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          <img
            src="/images/CV.jpeg"
            alt="CV Preview"
            style={{ width: "40%", maxWidth: "800px" }}
          />
        </Link>
      </ImageContainer>
    </Container>
  );
};

export default CVPage;
