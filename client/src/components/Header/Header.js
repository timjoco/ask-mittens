import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContentLogin() {
    if (this.props.auth) {
      return [
        <li key="1">
          <Link to="/home/blog">
            <button className=" waves-effect waves-light btn">
              Mittens' Blog
            </button>
          </Link>
        </li>,
        <li key="2">
          <Link to="/home/form">
            <button className=" waves-effect waves-light btn">
              Ask Mittens A Question
            </button>
          </Link>
        </li>,
        <li key="3">
          <Link to="/home/profile">
            <button className=" waves-effect waves-light btn">Profile</button>
          </Link>
        </li>,
        <li key="4">
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
            style={{ margin: '0 20px' }}
          >
            Ask Mittens
          </Link>
          <ul>
            <div id="nav-mobile" className="right">
              {this.renderContentLogin()}
            </div>
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
