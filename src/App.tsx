import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import CVPage from "./components/CVPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsPage from "./components/ProductsPage";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Box
          sx={{
            backgroundColor: theme.globals.backgroundColor,
            minHeight: "100vh",
            paddingTop: theme.spacing(2),
          }}
        >
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cv" element={<CVPage />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
