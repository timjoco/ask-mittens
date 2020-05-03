import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Home from './Home/Home';
import Form from './Form/Form';
import Profile from './Profile/Profile';
import Blog from './Blog/Blog';
import Post from './Blog/Post';
import Footer from './Footer/Footer';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="page-containter">
        <div className="content-wrap">
          <div>
            <BrowserRouter>
              <div>
                <Header />
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/home/form" component={Form} />
                  <Route exact path="/home/profile" component={Profile} />
                  <Route exact path="/home/blog" component={Blog} />
                  <Route path="/blog/:slug" render={Post} />
                </Switch>
              </div>
            </BrowserRouter>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
