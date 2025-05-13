import { Email, LinkedIn } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const AboutPage = () => {
  return (
    <Container maxWidth="md">
      <Typography
        color="headline"
        variant="h3"
        align="center"
        gutterBottom
        sx={{ mt: 24 }}
      >
        About Ed
      </Typography>
      <Typography
        color="headline"
        variant="h4"
        align="center"
        gutterBottom
        sx={{ mt: 4 }}
      >
        Product Builder
      </Typography>
      {/* <Typography
        color="headline"
        variant="h5"
        align="center"
        gutterBottom
        sx={{ mt: 8, maxWidth: "400px", margin: "0 auto" }}
      >
        Customer-Centric, Data-Driven, Problem Solver
      </Typography> */}
      <Grid container spacing={2} alignItems="flex-start" sx={{ mt: 12 }}>
        <Grid item xs={12} sm={3}>
          <Avatar
            alt="Ed Carey"
            src="/images/644dab143d915f461c35912e-DeepAgency.png"
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "200px",
              mt: 2,
              "@media (max-width: 599px)": {
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Typography color="primary" variant="body1" paragraph>
            I’m a product builder and startup founder who loves solving real
            problems with simple, focused solutions. I care deeply about
            creating products that genuinely work for the people using them,
            blending customer insight, lean thinking, and just enough coding
            ability to be dangerous.
          </Typography>
          <Typography color="primary" variant="body1" paragraph>
            Over the years, I’ve helped launch and grow multiple startups —
            raising capital, leading cross-functional teams, and contributing to
            two successful product exits generating over $60 million. I’ve
            worked as a CEO, a hands-on PM, and everything in between, always
            focused on solving problems that need painkillers, not vitamins.
          </Typography>
          <Typography color="primary" variant="body1" paragraph>
            I get energy from working with great people, coaching product teams,
            and staying close to the craft. I use data to guide decisions,
            challenge assumptions, and uncover the next opportunity. And while I
            thrive in the pace and pressure of startup life, I always try to
            keep things grounded, collaborative, and human.
          </Typography>
          <Typography color="primary" variant="body1" paragraph>
            Right now, I’m especially curious about how large language models
            and AI agents can drive real-world efficiencies — not just as a
            trend, but as practical tools that help people and businesses move
            faster.
          </Typography>
          <Typography color="primary" variant="body1" paragraph>
            If you’re working on something ambitious, trying to scale what
            you’ve started, or just want to chat product, AI or code, I’d love
            to hear from you.
          </Typography>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              color="headline"
              variant="h4"
              align="center"
              gutterBottom
              sx={{ mt: 4 }}
            >
              Let's connect
            </Typography>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <IconButton href="mailto:ecarey23@gmail.com" color="primary">
                  <Email />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  href="https://www.linkedin.com/in/ed-carey/"
                  target="_blank"
                  color="primary"
                >
                  <LinkedIn />
                </IconButton>
              </Grid>
            </Grid>
            <Box mt={4}>
              <Typography
                color="primary"
                variant="body1"
                align="center"
                sx={{ maxWidth: "600px", margin: "0 auto" }}
              >
                Please don't hesitate to reach out if you would like to chat. I
                am always open to new conversations and will do my best to
                respond. Cheers!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutPage;
