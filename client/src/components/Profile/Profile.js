import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

class Profile extends Component {
  state = {
    posts: [],
  };

  componentDidMount = () => {
    this.getUserQuestions();
  };

  renderProfile() {
    if (this.props.auth) {
      return (
        <div>
          <Typography variant="h4">
            {' '}
            Welcome {this.props.auth.username}
          </Typography>
        </div>
      );
    } else {
      return <div>getting name...</div>;
    }
  }

  getUserQuestions = () => {
    axios
      .get('/api/posts')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data received');
      })
      .catch(() => {
        alert('Error retrieving data!');
        // console.log(response);
      });
  };

  render() {
    return (
      <Container>
        <CssBaseline />
        <div style={{ textAlign: 'center' }}>
          {this.renderProfile()}
          <Typography>Profile Page Is In Development...</Typography>
        </div>
      </Container>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile);
