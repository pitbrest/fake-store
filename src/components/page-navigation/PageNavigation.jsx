import React from 'react';

function PageNavigation() {
  return (
    <div className="page-navigation-btns">
      <button
        type="button"
        className="top-arrow rounded-full w-min border-2 border-teal-700 lg:hidden"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }
      >
        ▲
      </button>
      <button
        type="button"
        className="bottom-arrow rounded-full inline-block w-min border-2 border-teal-700 lg:hidden"
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth',
          })
        }
      >
        ▼
      </button>
    </div>
  );
}

export default PageNavigation;
