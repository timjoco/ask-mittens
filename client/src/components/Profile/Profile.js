import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css';

class Profile extends Component {
  renderProfile() {
    if (this.props.auth) {
      return (
        <div>
          <p> Hello: {this.props.auth.username}</p>
        </div>
      );
    } else {
      return <div>please login!</div>;
    }
  }
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <div style={{ textAlign: 'center' }}>{this.renderProfile()}</div>;
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile);
