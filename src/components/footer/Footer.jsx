import React from 'react';
import './Footer.css';

function Footer() {
  const actualYear = new Date().getFullYear();
  return (
    <footer className="py-2">
      <div className="container footer-container">
        <div className="copy">
          <i className="bi bi-c-circle mx-1"> </i>
          {actualYear}
        </div>
        <div className="gh-link">
          <a
            href="https://github.com/pitbrest"
            target="_blank"
            rel="noreferrer"
            className="bi bi-github fs-3"
          >
            {' '}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
