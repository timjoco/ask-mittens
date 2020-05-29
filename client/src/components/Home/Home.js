import React from 'react';
import WelcomeContent from './WelcomeContent/WelcomeContent';
import { makeStyles, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.paper}>
        <CssBaseline />
        <div className={classes.container}>
          <Typography variant="h2">
            <Box textAlign="center" p={3} pb={8}>
              what is ask mittens?
            </Box>
          </Typography>
          <WelcomeContent />
        </div>
      </div>
    </Container>
  );
}
