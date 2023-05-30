import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { About, Main } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
