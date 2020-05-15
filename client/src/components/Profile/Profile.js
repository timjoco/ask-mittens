import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './Profile.css';

class Profile extends Component {
  renderProfile() {
    if (this.props.auth) {
      return (
        <div>
          <h1> Welcome {this.props.auth.username}</h1>
        </div>
      );
    } else {
      return <div>please login!</div>;
    }
  }

  render() {
    return (
      <Container>
        <CssBaseline />
        <div style={{ textAlign: 'center' }}>
          {this.renderProfile()}
          <p>Profile Page Is In Development...</p>
        </div>
        ;
      </Container>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile);
