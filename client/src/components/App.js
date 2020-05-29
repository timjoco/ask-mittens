import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Blog from './Blog/Blog';
import Post from './Blog/Post';
import Footer from './Footer/Footer';
import MittensForm from './Form/MittensForm';
import ThankYou from './Form/ThankYou';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <div className="page-container">
          <div className="content-wrap">
            <BrowserRouter>
              <Header />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/forms" component={MittensForm} />
                <Route exact path="/form/thanks" component={ThankYou} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/learn" component={Blog} />
                <Route path="/learn/:slug" render={Post} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(null, actions)(App);
