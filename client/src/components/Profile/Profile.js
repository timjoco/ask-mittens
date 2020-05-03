import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    return <div style={{ textAlign: 'center' }}>{this.renderProfile()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile);
