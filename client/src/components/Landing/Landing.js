import React from 'react';
import './Landing.css';
import { makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.container}>
        <CssBaseline />
        <Typography variant="h1">
          <Box textAlign="center" m={15}>
            a self-help tool for the everyday cat owner
          </Box>
        </Typography>
      </div>
    </Container>
  );
};

export default Landing;
