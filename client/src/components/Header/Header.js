import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContentLogin() {
    if (this.props.auth) {
      return [
        <li key="1" style={{ margin: '0 10px' }}>
          <a href="sass.html">Welcome, {this.props.auth.username}</a>
        </li>,
        <li key="2" style={{ margin: '0 10px' }}>
          <a href="badges.html">Ask Me A Question</a>
        </li>,
        <li key="3" style={{ margin: '0 10px' }}>
          <a href="/api/logout" className=" waves-effect waves-light btn">
            Logout
          </a>
        </li>,
      ];
    } else {
      return (
        <li>
          <a href="/auth/google" className="waves-effect waves-light btn">
            Login With Google
          </a>
        </li>
      );
    }
  }

  render() {
    return (
      <nav className="deep-purple lighten-2">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/home' : '/'}
            className="brand-logo left"
            style={{ margin: '0 10px' }}
          >
            Ask Mittens
          </Link>
          <ul>
            <li id="nav-mobile" className="right">
              {this.renderContentLogin()}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
