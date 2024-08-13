import { Paper, Stack, Button } from '@mui/material';
import React from 'react';
import Container from './Container';
import Logo from './Logo';

const Footer = () => {
  return (
    <Container>
      <Paper square={true} sx={{ backgroundImage: "unset", padding: "2rem" }}>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row" }}
          sx={{ height: "max-content" }}
        >
          <Logo />
          <a href="www.linkedin.com/in/abhijithsm" rel='noreferrer' target='_blank'>
            <Button sx={{ color: "white" }}>
              ABHIJITH SM
            </Button>
          </a>
         
        </Stack>
      </Paper>
    </Container>
  );
};

export default Footer;