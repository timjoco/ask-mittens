import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="containter">
        <div className="row center">
          <div classname="col s12 m10 offset-m1">
            <h1 className="header-landing">ASK MITTENS</h1>
          </div>
        </div>
      </div>
      <div className="borderBox">
        <div className="containter">
          <div className="col s12 m10 offset-m1">
            A self-help page for the everyday cat owner
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
