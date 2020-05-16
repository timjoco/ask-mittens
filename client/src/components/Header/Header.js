import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, ListItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import MenuIcon from '@material-ui/icons/Menu';

class Header extends Component {
  renderContentLogin() {
    const flexContainer = {
      display: 'flex',
      flexDirection: 'row',
      padding: '20px',
      fontSize: '5px',
    };
    if (this.props.auth) {
      return [
        <List style={flexContainer}>
          <ListItem key="askQuestion">
            <a href="/forms" style={{ textDecoration: 'none' }}>
              <Button>Ask</Button>
            </a>
          </ListItem>
          <ListItem key="blog">
            <a href="/blog" style={{ textDecoration: 'none' }}>
              <Button>Blog</Button>
            </a>
          </ListItem>

          <ListItem key="3">
            <a href="/profile" style={{ textDecoration: 'none' }}>
              <Button>Profile</Button>
            </a>
          </ListItem>
          <ListItem key="logout">
            <a href="/api/logout" style={{ textDecoration: 'none' }}>
              <Button>Logout</Button>
            </a>
          </ListItem>
        </List>,
      ];
    } else {
      return (
        <a href="/auth/google" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="accent"
            style={{
              backgroundColor: 'white',
              borderRadius: 35,
              fontSize: '14px',
              marginTop: '12px',
            }}
          >
            Get Started
          </Button>
        </a>
      );
    }
  }

  render() {
    return (
      <div>
        <AppBar
          position="static"
          style={{ backgroundColor: '#7550a6' }}
          elevation={0}
          className="list"
        >
          <Toolbar>
            <Grid justify="space-between" container spacing={1}>
              <Link to={this.props.auth ? '/home' : '/'}>
                <Typography variant="h2">
                  <Box
                    style={{
                      color: 'white',
                      fontSize: '30px',
                      paddingTop: '30px',
                      display: 'inline-block',
                    }}
                  >
                    ask mittens
                  </Box>
                </Typography>
              </Link>
              <ul>
                <div>{this.renderContentLogin()}</div>
              </ul>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
