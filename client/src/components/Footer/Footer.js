import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer" style={{ textAlign: 'center' }}>
      <footer className="page-footer deep-purple lighten-2">
        <p className="grey-text text-lighten-4">Created by Tim O'Connor</p>
        <a
          href="https://github.com/timjoco"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/timjoco/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>

        <div className="footer-copyright">
          <div className="container">
            @{new Date().getFullYear()} All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
