import React from 'react';
import './Preloader.css';

function Preloader() {
  return (
    <div className="preloader-container">
      {' '}
      <div className="pl">
        <div className="pl__outer-ring" />
        <div className="pl__inner-ring" />
        <div className="pl__track-cover" />
        <div className="pl__ball">
          <div className="pl__ball-texture" />
          <div className="pl__ball-outer-shadow" />
          <div className="pl__ball-inner-shadow" />
          <div className="pl__ball-side-shadows" />
        </div>
      </div>
    </div>
  );
}

export default Preloader;
