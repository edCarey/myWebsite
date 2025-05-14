import ChatIcon from "@mui/icons-material/Chat";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, Link as RouterLink } from "react-router-dom";

const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#F6F5F4" }}>
      <Toolbar>
        <RouterLink
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Typography
            color="primary"
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Button onClick={scrollToTop} component={Link} to="/">
              Ed Carey
            </Button>
          </Typography>
        </RouterLink>
        <div style={{ flexGrow: 1 }}></div>
        <Button
          color="primary"
          onClick={scrollToTop}
          component={Link}
          to="/about"
        >
          About
        </Button>
        <Button
          color="primary"
          onClick={scrollToTop}
          component={Link}
          to="/blog"
        >
          Blog
        </Button>
        <Button color="primary" onClick={scrollToTop} component={Link} to="/cv">
          CV
        </Button>
        <Button
          color="primary"
          onClick={scrollToTop}
          component={Link}
          to="/chat"
          startIcon={<ChatIcon />}
        >
          Chat
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
