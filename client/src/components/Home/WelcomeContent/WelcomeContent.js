import React from 'react';
import './WelcomeContent.css';
import Logo from '../../../mittens-logo.png';

const WelcomeContent = (props) => {
  return (
    <div className="container">
      <div className="welcome-content">
        <img src={Logo} alt="cat-home" className="cat-image-home" />
        <p onClick={props.click}>
          Meet Mittens! Mittens is here to help educate cat owners of all ages!
          Mittens writes daily blogs about the best ways to take care of your
          favorite furry friend and he also answers any questions you might have
          about your kitty.
        </p>
      </div>
      <div>
        <div className="row">
          <div className="col s4">
            <i className="fas fa-cat fa-3x"></i>
            <p>
              Ask Mittens any question you would like about your specific kitty
              and he will do his best to get back to you with an answer.
            </p>
          </div>
          <div className="col s4">
            <i className="fas fa-edit fa-3x"></i>
            <p>
              Mittens runs a daily blog where he posts about all sorts of things
              from best treats to feed your cats to how to stop your kitty from
              scratching the sofa!
            </p>
          </div>
          <div className="col s4">
            <i className="fas fa-home fa-3x"></i>
            <p>
              Mittens will share new and exciting animal news from across the
              country, including all of the wonderful work that numerous animal
              shelters are doing to help keep kitties safe and healthy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeContent;
