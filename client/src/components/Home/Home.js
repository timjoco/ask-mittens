import React from 'react';
import WelcomeContent from './WelcomeContent/WelcomeContent';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className="home-content">
          <h2>Welcome to Ask Mittens</h2>
          <WelcomeContent />
        </div>
      </div>
    );
  }
}

export default Home;
