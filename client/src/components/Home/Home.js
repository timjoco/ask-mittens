import React from 'react';
import WelcomeContent from './WelcomeContent/WelcomeContent';
import './Home.css';

class Home extends React.Component {
  state = {
    content: '',
    showContent: false,
  };

  toggleWelcomeContent = () => {
    const doesShow = this.state.showContent;
    this.setState({
      showContent: !doesShow,
    });
  };

  render() {
    let content = null;

    if (this.state.showContent) {
      content = (
        <div>
          <WelcomeContent />
        </div>
      );
    }

    return (
      <div style={{ textAlign: 'center' }}>
        <div className="home-content">
          <h2>Welcome to Ask Mittens</h2>
          <p>How does it work?</p>
          {content}
          <button
            className="waves-effect waves-light btn"
            onClick={this.toggleWelcomeContent}
          >
            Click Here!
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
