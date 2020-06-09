import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

class Profile extends Component {
  // state = {
  //   posts: [],
  // };
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount = () => {
    // this.getUserQuestions();
    axios
      .get('/api/user_posts', {
        headers: { crossDomain: true, 'Content-type': 'application/json' },
      })
      .then((res) => {
        this.setState({ posts: res.data });
        console.log(JSON.stringify(this.state.posts));
      });
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

  // getUserQuestions = () => {
  //   axios
  //     .get('/api/user_posts')
  //     .then((response) => {
  //       const data = response.data;
  //       this.setState({ posts: data });
  //       console.log('Data received');
  //     })
  //     .catch((error) => {
  //       alert('Error retrieving data!');
  //     });
  // };

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
