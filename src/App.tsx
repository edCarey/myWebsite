import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import { ChatPage } from "./components/ChatPage";
import CVPage from "./components/CVPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsPage from "./components/ProductsPage";
import PageLayout from "./layouts/PageLayout";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/chat"
            element={
              <PageLayout isFixed={true}>
                <ChatPage />
              </PageLayout>
            }
          />
          <Route
            path="*"
            element={
              <PageLayout>
                <Routes>
                  <Route path="/" element={<ProductsPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/cv" element={<CVPage />} />
                </Routes>
                <Footer />
              </PageLayout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
