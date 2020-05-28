import React from 'react';
// import WelcomeContent from './WelcomeContent/WelcomeContent';
import { makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Home.css';

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
            <Box className={classes.paper}>ASK MITTENS</Box>
          </Typography>
        </div>
      </div>
    </Container>
  );
}
