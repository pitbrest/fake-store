import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1 className="text-2xl mb-5">This page does not exist ...</h1>
      <Link
        to="/"
        className="font-bold text-teal-600 text-xl underline underline-offset-4"
      >
        Go home
      </Link>
    </div>
  );
}

export default NotFoundPage;
