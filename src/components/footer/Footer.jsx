import React from 'react';
import './Footer.css';

function Footer() {
  const actualYear = new Date().getFullYear();
  return (
    <footer className="py-2 bg-teal-600 text-slate-50 font-bold">
      <div className="section-container flex items-center justify-center gap-x-20">
        <div className="copy flex items-center justify-center gap-x-2">
          <span className="text-2xl leading-1 font-normal">&copy;</span>
          {actualYear}
        </div>
        <div className="gh-link">
          <a
            href="https://github.com/pitbrest"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-x-2"
          >
            <i className="bi bi-github text-2xl  hover:text-teal-200"> </i>
            <span className="hover:text-teal-200">pitbrest</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
