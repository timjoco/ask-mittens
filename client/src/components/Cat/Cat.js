import React from 'react';
import './Cat.css';

const Cat = () => {
  return (
    <div className="cat-container">
      <div className="cat">
        <div className="face">
          <div className="earL">
            <div className="innerL"></div>
          </div>
          <div className="earR">
            <div className="innerR"></div>
          </div>
          <div className="eyeL">
            <div className="eyeball"></div>
          </div>
          <div className="eyeR">
            <div className="eyeball"></div>
          </div>
          <div className="nose">
            <div className="l1"></div>
            <div className="l2"></div>
          </div>
          <div className="body">
            <div className="pawL">
              <div className="socksL"></div>
            </div>
            <div className="pawR">
              <div className="socksR"></div>
            </div>
            <div className="tail"></div>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default Cat;
