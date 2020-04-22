import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
  renderContentLogin() {
    if (this.props.auth) {
      return <li><a href="/api/logout" class="waves-effect waves-light btn"> Logout</a></li>;
    } else {
      return <li><a href="/auth/google" class="waves-effect waves-light btn">Login With Google</a></li>
    }
  } 
  
  render() {
    return (
      <nav className="container">
      <div class="nav-wrapper" class="blue-text text-darken-2">
        <Link to={this.props.auth ? '/home' : '/'} className="brand-logo center">
          Cat Care
        </Link>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="sass.html">Blog</a></li>
          <li><a href="badges.html">AMA</a></li>
        </ul>
        <ul>
        <li className="right">{this.renderContentLogin()}</li>
        </ul>
      </div>
    </nav>
    )
  }
}


function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);