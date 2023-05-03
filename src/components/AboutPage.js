import React from 'react';
import { Typography, Grid, Avatar, IconButton, Container, Box } from '@mui/material';
import { Email, LinkedIn } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';


const AboutPage = () => {
  return (
    <Container maxWidth="md"> 
      <Typography color="headline" variant="h3" align="center" gutterBottom sx={{ mt: 24}}>
        About Ed
      </Typography>
      <Typography color="headline" variant="h3" align="center" gutterBottom sx={{ mt: 24}}>
        Product Business Creator
      </Typography>
      <Typography color="headline" variant="h5" align="center" gutterBottom sx={{ mt: 8, maxWidth: '400px', margin: '0 auto'}}>
        Customer-Centric, Data-Driven, Problem Solver
      </Typography>
      <Grid container spacing={2} alignItems="flex-start" sx={{ mt: 12}}>
        
        <Grid item xs={12} sm={3}>
          <Avatar
            alt="Ed Carey"
            src="/images/Primary_Headshot.png"
            sx={{ 
              width: '100%', 
              height: 'auto', 
              maxWidth: '200px',
              '@media (max-width: 599px)': {
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              },
            }}            
          />
          <Avatar
            alt="Ed Carey"
            src="/images/644dab143d915f461c35912e-DeepAgency.png"
            sx={{ 
              width: '100%', 
              height: 'auto', 
              maxWidth: '200px', 
              mt: 2,
              '@media (max-width: 599px)': {
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }, 
            }}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Typography color="primary" variant="body1" paragraph>
          I'm a passionate product leader, blending user-centric design with technical know-how. Driven by the {''} 
          <RouterLink to="https://theleanstartup.com/principles">
            Lean Startup principles
          </RouterLink>{' '}
          and {' '}
          <RouterLink to="https://martinfowler.com/bliki/Yagni.html">
            YAGNI
            </RouterLink>{''}
            , I craft agile and focused products that genuinely address users' needs, cutting complexity.  
          </Typography>
          <Typography color="primary" variant="body1" paragraph>
          As a former CEO, and being involved in two business buy-outs of products I've developed, I've mastered collaboration and grasped the importance of robust go-to-market strategies, genuinely solving customer problems. My expertise in startups and data analytics enables me to spot opportunities, assess risks, and prioritise initiatives aligned with company goals.
          </Typography>
          <Typography color="primary" variant="body1" paragraph>
          I find great satisfaction in mentoring product managers, refining my leadership skills, and deepening my product development understanding, with a little self-learned coding on the side. Committed to driving innovation with data, I challenge assumptions and uncover opportunities to create exceptional product experiences.
          </Typography>
          <Typography color="primary" variant="body1" paragraph>
          I'm passionate about growing products that solve our customers' problems and exceed their expectations, all the while keeping a friendly, human touch at the heart of my work.
          </Typography>
        </Grid>
      </Grid>
        <Box mt={4}>
          <Grid container>
            <Grid item xs={12}>
              <Typography color="headline" variant="h4" align="center" gutterBottom sx={{mt:4}}>
                Let's connect
              </Typography>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <IconButton href="mailto:ecarey23@gmail.com" color="primary">
                    <Email />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton href="https://www.linkedin.com/in/ed-carey/" target="_blank" color="primary">
                    <LinkedIn />
                  </IconButton>
                </Grid>
              </Grid>
              <Box mt={4}>
                <Typography color="primary" variant="body1" align="center" sx={{maxWidth: '600px', margin: '0 auto'}}>
                Please don't hesitate to reach out if you would like to chat about work, share your feedback and input, or just connect. I am always open to new conversations and will do my best to respond to you in a timely manner. Cheers!
                </Typography>
              </Box>
            </Grid>              
          </Grid>
        </Box>
    </Container>
  );
};

export default AboutPage;
